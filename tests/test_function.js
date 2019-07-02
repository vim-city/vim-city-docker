const Mocha = require('mocha')
const fs = require('fs')
const util = require('util')
const writeFile = util.promisify(fs.writeFile)
const path = require('path')

const jsonPathToUserInput = path.join(__dirname, '.', 'userInput.js')
console.log('jsonPathToUserInput:', path.join(__dirname, '.', 'userInput.js'))
const getPathToTest = (challengeId) => {
  const challengePath = path.join(__dirname, '.', `challenge_${challengeId}.spec.js` )

  return challengePath
}
console.log('pathToChallenge', getPathToTest(1))


//async function, takes a string and returns a string stating test results
 let testResult = async (str, filepath) => {
  try {
  let testsPassed = 0
  let testsFailed = 0
  let errors = ''
  await writeFile(jsonPathToUserInput, str)
  const mocha = new Mocha({})
  mocha.addFile(filepath)
  await new Promise(resolve => {
    mocha
      .run()
      .on('pass', function() {
        testsPassed += 1
      })
      .on('fail', function(test) {
        testsFailed += 1
        errors = errors + '\n' + String(test.err)
      })
      .on('end', function() {
        resolve()
      })
  })

  let resultStr = `Tests Passed: ${testsPassed} \n Tests Failed: ${testsFailed} \n Errors: ${errors} `

  let pass = testsFailed >= 1 ? false : true

  let resultObj = {
    resultStr,
    pass
  }
  return resultObj

 } catch (error){
   console.log('error inside test_function.js', error)
 }
 }
// const logResult = async () => {
//   let result = await testResult(
//     "const myFunction = '() => false' \n module.exports = myFunction", getPathToTest(1)
//   )
//   console.log(result)
// }

// logResult()

module.exports = {
  getPathToTest,
  testResult
}

