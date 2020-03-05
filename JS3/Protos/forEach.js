const obj = {
  a : 1,
  b : 2, 
  c : 3
}

Object.prototype.forEach = function(fun, i=0, entries = Object.entries(this)) {
  if (i === entries.length) return
  fun(entries[i][1], entries[i][0])
  return this.forEach(fun, i+1)
}

obj.forEach((key, value) => {
  console.log(key, 'key', value, 'value')
})
