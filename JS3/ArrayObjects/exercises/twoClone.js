const a = ['Edna', 'Optimus', 'Minion'];

Array.prototype.setMaxSize = function(max) {
  this.max = max
  this.oldPush = this.push
  /*
  this.push = (newElement) => {
    if (this.length < max) {
      return this.oldPush(newElement)
    }
    return this.length
  }
  */
}

Array.prototype.push = function(newElement) {
  if (this.length < this.max) {
    return this.oldPush(newElement)
  }
  return this.length
}

console.log(a.setMaxSize(4));

console.log(a.push("hello1"))
console.log(a.push("hello2"))
console.log(a.push("hello2"))
console.log(a.push("hello2"))
console.log(a)
