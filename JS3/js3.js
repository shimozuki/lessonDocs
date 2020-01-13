allFuns = {};

Array.prototype.countForEach = function(cb) {
  this.forEachCount = (this.forEachCount || 0) + 1
  this.forEach(cb)
  return this.forEachCount
}

const villians = ["Joker", "Catwoman", "Penguin", "Riddler"]
const a = villians.countForEach(() => {})
const b = villians.countForEach(() => {})
const c = villians.countForEach(() => {})

console.log(a, 'a')
console.log(b, 'b')
console.log(c, 'c')

const moreVillians = ["Two-Face", "Bane"]
const d = moreVillians.countForEach(() => {}) + villians.countForEach(() => {})
console.log(d, 'd')

module.exports = allFuns;
