"use strict";

const express = require("express");
const cors = require("cors");
const runTests = require('./tests')

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors());
app.options("/eval", cors());


// const corsOptions = {
//   origin: 'https://vim-city.herokuapp.com',
//   optionsSuccessStatus: 200
// }

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
    let userResultObj = runTests(req.body.challengeId, req.body.userInputStr)
    console.log('userResultObj', userResultObj)
    res.json(userResultObj);
  } catch (error) {
    console.log("this is the error in the docker: ", error);
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
