const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong",
}

Object.prototype.filter = function(fun, i=0, entries = Object.entries(this), res = {}) {
  if (i === entries.length) return res
  if (fun(entries[i][0], entries[i][1])) {
    res[entries[i][0]] = entries[i][1]
  }
  return this.filter(fun, i+1, entries, res)
}

const result = info.filter((key, value) => {
  return key[0] === 'i' || value[0] === 'n'
})

console.log(result)
