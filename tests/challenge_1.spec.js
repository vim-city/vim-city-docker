const {expect} = require('chai')
const userInput = require('./userInput')
let indirectEval = eval

describe('Function', () => {
  console.log('this is user input:', userInput)
  it('returns true', () => {
    expect(indirectEval(userInput)()).to.equal(true)
  })
  it('returns false', () => {
    expect(indirectEval(userInput)()).to.equal(false)
  })
})

