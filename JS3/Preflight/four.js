const funs = {}

const makeRow = (num, i=0, res=[]) => {
  if (i === num) return res
  res.push(0)
  return makeRow(num, i+1, res)
}

const zeroSquare = (num, i=0, res=[]) => {
  if (i === num) return res
  res.push(makeRow(num))
  return zeroSquare(num, i+1, res)
}

funs.makeRow = makeRow
funs.zeroSquare = zeroSquare

module.exports = funs

