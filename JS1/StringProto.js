String.prototype.repeatify = function(num, i=0, result='') {
  if (i === num) return result
  result += this
  return this.repeatify(num, i+1, result)
}

const a = "hello".repeat(3)
const b = "hello".repeatify(3)

console.log(a)
console.log(b)