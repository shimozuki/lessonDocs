const arr = [9, 80, 12, 2]

Array.prototype.removeEvens = function(i=0) {
  if (i === this.length) return this
  console.log(this, 'this')
  if (this[i] % 2 === 0) { 
    this.splice(i, 1)
    i-=1
  }
  return this.removeEvens(i+1)
}

const a = arr.removeEvens()

console.log(a, 'a')
