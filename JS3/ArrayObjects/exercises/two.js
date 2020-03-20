const a = ['Edna', 'Optimus', 'Minion'];

Array.prototype.setMaxSize = function(val) {
  const push = () => {
  if (this.length >= val) {
    return this.length
  } 
  }
}

console.log(a.setMaxSize(4));

console.log(a.push('Groot')); // push returns 4.
// Array is ["Edna", "Optimus", "Minion", "Groot"]

console.log(a.push('hello')); // Nothing happens. push returns 4, array stays the same.
