Array.prototype.countForEach = function(cb) {
  this.forEachCount = (this.forEachCount || 0) + 1
  this.forEach(cb)
  return this.forEachCount
}

const villians = ["Joker", "Catwoman", "Penguin", "Riddler"]
villians.countForEach(()=>{})
villians.countForEach(()=>{})
villians.countForEach(()=>{})

const moreVillians = ["Two-Face", "Bane"]
moreVillains.countForEach(()=>{}) + villians.countForEach(()=>{})

