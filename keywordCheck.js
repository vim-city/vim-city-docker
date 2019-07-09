const keywordCheck = (str) => {
    const doNotAllow = ['require', 'while', 'import', 'export', 'npm', 'eval']
    let safe = true
    for (let i = 0; i < doNotAllow.length; ++i) {
      if (str.search(doNotAllow[i]) !== -1) {
        safe = false
      }
    }
    return safe
  }

module.exports = keywordCheck
