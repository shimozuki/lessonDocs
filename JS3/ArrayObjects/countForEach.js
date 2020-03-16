Array.prototype.countForEach = function(cb) {
  this.forEachCount = (this.forEachCount || 0) + 1
  this.forEach(cb)
  return this.forEachCount
}

const villians = ["Joker", "Catwoman", "Penguin", "Riddler"]
villians.countForEach(()=>{})
villians.countForEach(()=>{})
villians.countForEach(()=>{})

const moreV = ["Two-Face", "Bane"]
moreV.countForEach(()=>{}) + villians.countForEach(()=>{})

