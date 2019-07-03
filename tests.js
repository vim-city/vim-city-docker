let indirectEval = eval

function runTests(challengeNum, userInput){
  console.log('challengeNum', challengeNum)
  console.log('userInput', userInput)
  switch (challengeNum){
    case 1:
      console.log('inside case 1', challengeOne(userInput))
      return challengeOne(userInput)
   default:
     return 'did not recognize case'
  }
}


function challengeOne(userInput){
  let resultObj = {}
  try {
  let userResult = indirectEval('(' + userInput + ')')
  let funcOutput = userResult('Pina Colada')
  if (funcOutput === 'Pina Colada with ice and an umbrella'){
    resultObj.passed = true
    resultObj.message = 'Congrats! You fixed the bad code'
  }
 else {
    resultObj.passed = false
    resultObj.message = `AssertionError: expected ${funcOutput} to equal 'Pina Colada with ice and an umbrella'`
  }

  console.log('challengeOne has been called')
 return resultObj
}
catch (error){
  console.log('error in challengeOne func')
  resultObj.passed = false
  resultObj.message = error.message
  return resultObj
}
}

module.exports = runTests
