allFuns = {};

const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong",
}

Object.prototype.eat = function(value) {
  const num = this.data || 0
  if (value < num) {
    return
  }
  this.data = value
}

const a = {name: "iron"}
a.eat(5)
a.eat(3)
a.eat(30)

console.log(a, 'a')

Object.prototype.forEach = function(fn, i=0, entries = Object.entries(this)) {
  console.log(this, 'object')
  if (i === entries.length) return 
  fn(entries[i][0], entries[i][1], i, this)
  return this.forEach(fn, i+1, entries)
}

const result = info.forEach( (key, value, i) => {
  console.log(key, value, i)
})

console.log(result, 'result')

module.exports = allFuns;
