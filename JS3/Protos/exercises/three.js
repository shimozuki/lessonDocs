const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong"
}

Object.prototype.reduce = function(fun, acc, i=0, entries = Object.entries(this)) {
  if (i === entries.length) return acc
  acc = fun(acc, entries[i][0], entries[i][1], i)
  return this.reduce(fun, acc, i+1, entries)
}

const result = info.reduce((acc, key, value, i) => {
  return acc + `${key}-${i}-${value},`
}, '')

console.log(result)
