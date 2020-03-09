Array.prototype.getIterator = function() {
  let i = -1;
  return () => {
    i = i + 1;
    return this[i % this.length];
  };
};

const a = [1, 2, 3, 4, 5];
const b = a.getIterator();

console.log(b(), 1);
console.log(b(), 2);
console.log(b(), 3);
console.log(b(), 4);
console.log(b(), 5);
console.log(b(), 1);
console.log(b(), 2);
console.log(b(), 3);
console.log(b(), 4);
console.log(b(), 5);

const iterate = ['PayPal', 'Google', 'Netflix'].getIterator();

console.log(iterate());
console.log(iterate());
console.log(iterate());

const iterate2 = [9, 80, 12, 2].getIterator();

console.log(iterate2());
console.log(iterate2());
console.log(iterate2());
console.log(iterate2());
console.log(iterate2());
console.log(iterate2());

const iterate4 = [].getIterator();
console.log(iterate4());

const iterate3 = ['Ironman'].getIterator();
console.log(iterate3());
console.log(iterate3());
