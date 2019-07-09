let indirectEval = eval;

function runTests(userInput, challengeNum) {
  console.log('challengeNum', challengeNum);
  console.log('userInput', userInput);
  let challengeStr = +challengeNum
  switch (challengeStr) {
    case 1:
      console.log(challengeOne(userInput))
      return challengeOne(userInput);
    case 2:
      console.log(challengeTwo(userInput))
      return challengeTwo(userInput);
    case 3:
      console.log(challengeThree(userInput))
      return challengeThree(userInput);
    case 4:
      console.log(challengeFour(userInput))
      return challengeFour(userInput);
    default:
      return 'did not recognize case';
  }
}

function challengeOne(userInput) {
  let resultObj = {};
  try {
    if (userInput.length > 125) {
      throw new Error(
        'Sorry, but your answer was much longer than the solution.'
      );
    }
    let userResult = indirectEval('(' + userInput + ')');
    let funcOutput = userResult('Pina Colada');
    if (funcOutput === 'Pina Colada with ice and an umbrella') {
      resultObj.passed = true;
      resultObj.message =
        'Congrats! Vim was able to place their order.  Their order was: "Pina Colada with ice and an umbrella"';
    } else {
      resultObj.passed = false;
      resultObj.message = `Too bad! Vim tried order a Pina Colada with ice and an umbrella, but all they got was: ${funcOutput}`;
    }
    return resultObj;
  } catch (error) {
    console.log('error in challengeOne func');
    resultObj.passed = false;
    resultObj.message = `Too bad! Vim tried to place their order, but the bartender told them: \n ${
      error.message
    } `;

    return resultObj;
  }
}

function challengeTwo(userInput) {
  let resultObj = {};
  try {
    if (userInput.length > 374) {
      throw new Error(
        'Sorry, but your answer was much longer than the solution.'
      );
    }
    let userResult = indirectEval('(' + userInput + ')');
    let funcOutput = userResult(
      'vym cyti\niou are so pretti\ny am so happi.\nthat y can move ryght and up\nwyth the l and k keis\nrespectyveli.'
    );
    if (
      funcOutput ===
      'vim city\nyou are so pretty\ni am so happy.\nthat i can move right and up\nwith the l and k keys\nrespectively.'
    ) {
      resultObj.passed = true;
      resultObj.message = `Congrats! You fixed Vin's spellchecker. Vin is so proud of their improved poem:\n ${funcOutput}`;
    } else {
      resultObj.passed = false;
      resultObj.message = `Too bad! It looks like you made their poem worse:\n${funcOutput}`;
    }
    return resultObj;
  } catch (error) {
    console.log('error in challengeTwo func');
    resultObj.passed = false;
    resultObj.message = `Too bad! Vin put their poem in the spellchecker, but here's what they got back:\n ${
      error.message
    } `;

    return resultObj;
  }
}

function challengeThree(userInput) {
  let resultObj = {};
  try {
    if (userInput.length > 235) {
      throw new Error(
        'Sorry, but your answer was much longer than the solution.'
      );
    }
    let userResult = indirectEval('(' + userInput + ')');
    let funcOutput = userResult([
      'Hackers Of The World Unite',
      'Hungry for Hacking',
      'Hack Into My Heart',
      'The Hunters And The Hackers',
    ]);
    if (
      funcOutput ===
      'siiiicckk performance by @HannahAndTheHacks in #vimcity. Hack Into My Heart = my anthem'
    ) {
      resultObj.passed = true;
      resultObj.message = `Congrats! Vim's tweet went viral.  Tweet: \n ${funcOutput}`;
    } else {
      resultObj.passed = false;
      resultObj.message = `Too bad! Vin picked the wrong song and now everyone thinks they have terrible taste in music. Tweet: ${funcOutput}`;
    }
    return resultObj;
  } catch (error) {
    console.log('error in challengeOne func');
    resultObj.passed = false;
    resultObj.message = `Too bad! Vin got this error message when they tried to post their tweet:\n ${
      error.message
    } `;
    return resultObj;
  }
}

function challengeFour(userInput) {
  let resultObj = {};
  try {
    if (userInput.length > 164) {
      throw new Error(
        'Sorry, but your answer was much longer than the solution.'
      );
    }
    let userResult = indirectEval('(' + userInput + ')');
    console.log('typeof user result', typeof userResult);
    let funcOutput = userResult(50);
    console.log('funcOUtput,', funcOutput);
    if (funcOutput === 45) {
      resultObj.passed = true;
      resultObj.message = `Congrats! Vim bought 50 ounces of carrot jello for $45.`;
    } else {
      resultObj.passed = false;
      resultObj.message = `Too bad! Vin's calculator says they should pay ${funcOutput} for 50 ounces of jello.`;
    }
    return resultObj;
  } catch (error) {
    console.log('error in challengeOne func');
    resultObj.passed = false;
    resultObj.message = `Too bad! The cash register returned this error:\n ${
      error.message
    } `;
    return resultObj;
  }
}

runTests(process.argv[2], process.argv[3])

module.exports = runTests;
