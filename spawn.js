const spawn = require('child_process').spawn;

const testTimeout = function(challengeNum, userInputStr){

  let completed = false

  const child = spawn('node', ['tests.js', `${userInputStr}`, `${challengeNum}`])

  let timeOutPromise = new Promise ((resolve)=> {
    const timeOut = setTimeout(function(){
      console.log('sending signal');
      if (!completed){
      let resultObj = {
          passed: false,
          message: 'Maximum call stack exceeded'
        }
      console.log('not completed')
      child.kill()

      resolve(resultObj)
      }

    }, 5000)
  })


// child.on('exit', function(){
//   clearTimeout(timeOut);
//   completed = true
//   console.log('Child exited!')
// })

let stdOutPromise = new Promise((resolve) =>
{child.stdout.on('data', data => {
console.log(`data from stdout:${data}`)
resolve(data)
})})

let stdErrPromise = new Promise((resolve) => {child.stderr.on('data', function(data){
console.log(`data from stderr:${data}`)
resolve(data)

})})

let race = Promise.race([timeOutPromise, stdErrPromise, stdOutPromise])
race.then(result => result)
}

// testTimeout(1, "function test(){ while(true){console.log('hello')}}")
module.exports = testTimeout
