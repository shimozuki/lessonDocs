const arr = [9, 80, 12, 2]

Array.prototype.sum = function(i=0, res=0) {
  if (i === this.length) return res
  res += this[i]
  return this.sum(i+1, res)
}

const a = arr.sum()

console.log(a, 'a')
