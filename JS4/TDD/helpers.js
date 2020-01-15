const allFuns = {}

allFuns.sumAll = (arr) => {
  if (!arr.length) {
    return 0
  }
  return arr.reduce((acc, e) => {
    return acc+=e
  }, 0)
}

allFuns.findLargest = (arr) => {
  if (arr.length < 2) {return arr}
  return arr.reduce((acc, e) => {
    if (e > acc) {
      return e
    }
    return acc
  }, arr[0])
}

module.exports = allFuns
