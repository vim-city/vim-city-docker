"use strict";
const  {testResult, getPathToTest}= require('./tests/test_function.js')
const express = require("express");
const cors = require("cors");

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
  console.log('req.body.func', req.body.func)
  console.log('req.body.challengeId', req.body.challengeId)
  try {
    const result = await testResult(req.body.func, getPathToTest(req.body.challengeId))
    res.json(result);
  } catch (error) {
    console.log("this is the error in the docker: ", error);
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
