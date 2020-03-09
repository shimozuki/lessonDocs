const arr = [9, 80, 12, 2]

Array.prototype.getEvens = function(i=0, res=[]) {
  if (i === this.length) return res
  if (this[i] % 2 === 0) { res.push(this[i]) }
  return this.getEvens(i+1, res)
}

const a = arr.getEvens()

console.log(a, 'a')
