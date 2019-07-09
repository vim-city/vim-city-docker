"use strict";

const express = require("express");
const cors = require("cors");
const runTests = require('./tests')
const testTimeout = require('./spawn')

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("/", cors());

app.get("/", (req, res) => {
  res.send("Hello world\n");
});

app.put("/eval", async (req, res) => {
  try {
    console.log('req.body.challengeId', req.body.challengeId)
    console.log('req.body.userInputStr', req.body.userInputStr)
    let userResultObj = await testTimeout(req.body.challengeId, req.body.userInputStr)
    console.log('userResultObj', userResultObj)
    res.json(userResultObj);
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
