const allFuns = {};

const a = ["chinese", "african", "korean"]

Array.prototype.tiredForEach = function(cb, time) {
  if (this.isTired) {
    return console.log(`Too tired. Please wait ${this.waitTime}ms.`)
  }
  this.isTired = true
  this.waitTime = time
  setTimeout(() => {
    this.isTired = false
  }, time)
  return this.forEach(cb)
};

const callback = (e, i) => {
  console.log(e + i)
}
a.tiredForEach(callback , 180)
/*
prints out:
chinese0
african1
korean2
*/

a.tiredForEach(callback , 180)
/*
prints out:
"Too tired. Please wait 180ms.
*/



setTimeout(() => {
  // run tiredForEach after 190ms
    a.tiredForEach(callback , 180)
}, 190)

/*
... 190ms later....
prints out:
chinese0
african1
korean2
*/

module.exports = allFuns;
