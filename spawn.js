const spawn = require('child_process').spawn;
let writeFileSync = require('fs').writeFileSync;

const testTimeout = function(challengeNum, userInputStr) {
  let completed = false;

  const child = spawn('node', [
    'tests.js',
    `${userInputStr}`,
    `${challengeNum}`,
  ]);

  let timeOutPromise = new Promise(resolve => {
    let timeOut = setTimeout(function() {
      if (!completed) {
        let resultObj = {
          passed: false,
          message: 'Maximum call stack exceeded',
        };
        writeFileSync('./result.js', JSON.stringify(resultObj));
        child.kill();

        resolve(resultObj);
      }
    }, 5000);
  });

  let exitPromise = new Promise(resolve => {
    child.on('exit', function() {
      completed = true;
      resolve(true);
    });
  });

  let stdOutPromise = new Promise(resolve => {
    child.stdout.on('data', data => {
      console.log(`data from stdout:${data}`);
      resolve(data);
    });
  });

  let stdErrPromise = new Promise(resolve => {
    child.stderr.on('data', function(data) {
      console.log(`data from stderr:${data}`);
      resolve(data);
    });
  });

  let race = Promise.race([timeOutPromise, exitPromise]);
  return race;
};

// testTimeout(1, "function test(){ while(true){console.log('hello')}}")
module.exports = testTimeout;
