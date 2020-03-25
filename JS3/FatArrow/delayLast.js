const arr = [1,2,3]

Array.prototype.delayedLast = function() {
  setTimeout(function() {
//    console.log(this[this.length-1], 'this')
    console.log(this, 'this')
  }, 1000)
}

const a = arr.delayedLast()
console.log(a, 'a')

