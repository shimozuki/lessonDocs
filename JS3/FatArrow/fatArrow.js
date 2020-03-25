const arr = [1,2,3]

Array.prototype.delayLast = function() {
  setTimeout(() => {
    console.log(this[this.length-1], 'this')
  }, 1000)
}

const a = arr.delayLast()

console.log(a, 'a')
