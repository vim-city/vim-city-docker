"use strict";

const express = require("express");
const cors = require("cors");
const runTests = require('./tests')

const testTimeout = require('./spawn')

const keywordCheck = require('./keywordCheck')


// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.options("/eval", cors());




const whitelist = ['https://vim-city.herokuapp.com']
const corsOptions = {
 origin: function (origin, callback) {
   if (whitelist.indexOf(origin) !== -1) {
     callback(null, true)
   } else {
     callback(new Error('Not allowed by CORS'))
   }
 }
}


app.get("/", cors(corsOptions),  (req, res) => {
  res.send("Hello world\n");
});

app.put("/eval", cors(corsOptions), async (req, res) => {
  try {

    console.log('req.body.challengeId', req.body.challengeId)
    console.log('req.body.userInputStr', req.body.userInputStr)
    let userResultObj = await testTimeout(req.body.challengeId, req.body.userInputStr)
    console.log('userResultObj', userResultObj)
    res.json(userResultObj);

    if (keywordCheck(req.body.userInputStr)) {
      let userResultObj = runTests(req.body.challengeId, req.body.userInputStr)
      res.json(userResultObj);
    } else {
      res.json('Try resetting the problem and follow the directions. Thanks.')
    }

  } catch (error) {
    console.log("this is the error in the docker: ", error);
  }
});
async function test(){
  let resultObj = await testTimeout('1', "function test(){ console.log('hello')}")
  console.log('this is resultObj from server.js', resultObj)
}
test()

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
