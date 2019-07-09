const lengthCheck = function(userInputStr, challengeId) {
  let challengeIdNum = +challengeId;
  if (challengeIdNum === 1 && userInputStr.length > 125) {
    return false;
  }
  if (challengeIdNum === 2 && userInputStr.length > 374) {
    return false;
  }
  if (challengeIdNum === 3 && userInputStr.length > 235) {
    return false;
  }
  if (challengeIdNum === 4 && userInputStr.length > 164) {
    return false;
  }
  return true;
};

module.exports = lengthCheck;
