const arr = [9, 80, 12, 2, 30];

Array.prototype.fizzbuzz = function(i = 0) {
  if (i === this.length) return this;
  if (this[i] % 3 === 0 && this[i] % 5 !== 0) {
    this[i] = 'fizz';
  } else if (this[i] % 3 !== 0 && this[i] % 5 === 0) {
    this[i] = 'buzz';
  } else if (this[i] % 3 === 0 && this[i] % 5 === 0) {
    this[i] = 'fizzbuzz';
  }

  return this.fizzbuzz(i+1)
};

const a = arr.fizzbuzz();

console.log(a, 'a');
