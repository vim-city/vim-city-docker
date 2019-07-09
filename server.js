'use strict';

const express = require('express');
const cors = require('cors');
const runTests = require('./tests');
const testTimeout = require('./spawn.js');
const readFileSync = require('fs').readFileSync;
const keywordCheck = require('./keywordCheck');
const lengthCheck = require('./lengthCheck');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('/eval', cors());
app.options('/', cors());

const whitelist = ['https://vim-city.herokuapp.com'];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.get('/', cors(corsOptions), (req, res) => {
  res.send('Hello world\n');
});

app.put('/eval', cors(corsOptions), async (req, res) => {
  try {
    let userResultObj = {};
    console.log('req.body.challengeId', req.body.challengeId);
    console.log('req.body.userInputStr', req.body.userInputStr);
    if (
      !lengthCheck(req.body.challengeId, req.body.userInputStr) ||
      !keywordCheck(req.body.userInputStr)
    ) {
      userResultObj.message =
        'Try resetting the problem and follow the directions. Thanks.';
      userResultObj.passed = false;
    } else {
      await testTimeout(req.body.challengeId, req.body.userInputStr);
      let bufferResult = readFileSync('result.js');
      userResultObj = Buffer.from(bufferResult, 'hex').toString('utf8');
    }
    res.json(userResultObj);
  } catch (error) {
    console.log('this is the error in the docker: ', error);
  }
});
// async function test() {
//   await testTimeout('1', "function test(){ while(true) {console.log('hello')}}");
//   console.log('reading result');
//   let result = readFileSync('result.js');
//   console.log(
//     'this is resultObj from server.js',
//     Buffer.from(result).toString('utf8')
//   );
// }
// test();

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
