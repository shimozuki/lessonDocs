const allFuns = {};

const a = ['Edna', 'Optimus', 'Minion'];

/*
Array.prototype.getNext = function() {
  const index = this.indexCounter || 0;
  this.indexCounter = (index + 1) % this.length;
  return this[index];
};
*/

Array.prototype.getNext = function() {
  this.counter = this.counter || 0;
  result = this[this.counter];
  this.counter = this.counter + 1;
  if (this.counter >= this.length) {
    this.counter = 0;
  }
  return result;
};

console.log(a.getNext(), 'Edna');
console.log(a.getNext(), 'Optimus');
console.log(a.getNext(), 'Minion');

console.log(a.getNext(), 'Edna');
console.log(a.getNext(), 'Optimus');
console.log(a.getNext(), 'Minion');

console.log(a.getNext(), 'Edna');

module.exports = allFuns;
