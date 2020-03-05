const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong"
}

Object.prototype.forEach = function(fun, i=0, entries = Object.entries(this)) {
  if (i === entries.length) return
  fun(entries[i][0], entries[i][1], i)
  return this.forEach(fun, i+1, entries)
}

const result = info.forEach((key, value, i) => {
  console.log(key, value, i)
})


console.log(info, 'info')
console.log(result, 'result')
