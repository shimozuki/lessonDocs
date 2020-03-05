Object.prototype.eat = function(value) {
  const num = this.data || 0
  if (value < num) {
    return
  }
  this.data = value
}

const a  = { name: "iron"}

console.log(a.eat(5))
console.log(a)
console.log(a.eat(3))
console.log(a)
console.log(a.eat(30))
console.log(a)


