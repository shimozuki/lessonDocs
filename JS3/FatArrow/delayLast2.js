const arr = [1,2,3]
Array.prototype.delayLast = function() {
  const self = this
  setTimeout(function() {
    console.log(self[self.length-1], 'self')
  }, 1000)
}

const a = arr.delayLast()

console.log(a, 'a')
