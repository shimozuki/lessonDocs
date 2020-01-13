/*
Write a getNext prototype function for arrays that returns 
the next element of the array.
*/

Array.prototype.getNext = function(i=0) {
  const index = this.indexCounter || 0 
  this.indexCounter = (index + 1) % this.length
  console.log('this[index]', this[index])
  return this[index]
};

const a = ['Edna', 'Optimus', 'Minion'];
const one = a.getNext(); // returns "Edna"

a.getNext(); // returns "Optimus"
a.getNext(); // returns "Minion"
a.getNext(); // returns "Edna"
a.getNext(); // returns "Optimus"
a.getNext(); // returns "Minion"
a.getNext(); // returns "Edna"

/*
Write an Array setMaxSize prototype function that gives arrays 
a max length beyond which new elements can no longer be pushed.
*/

/*
Array.prototype.setMaxSize = function(num) {
  this.oldPush = this.push

  this.push = (newElement) => {
    console.log(newElement, 'newElement')
    if (this.length < size) {
      return this.oldPush(newElement)
    }
    return this.length
  }
}
*/

const b = ['Edna', 'Optimus', 'Minion'];
//b.setMaxSize(4);

//b.push('Groot'); // push returns 4.
// Array is ["Edna", "Optimus", "Minion", "Groot"]

//b.push('hello');
// Nothing happens. push returns 4, array stays the same.

/*
Write a tiredForEach prototype function that runs a function on each 
element of an array, but makes the user wait a specified amount of 
time before calling it again.
*/

const arr = ['chinese', 'african', 'korean'];

Array.prototype.tiredForEach = function(cb, time) {
  if (this.isTired) {
    return console.log(`Too tired. Please wait ${this.waitTime}ms.`)
  }
  this.isTired = true
  this.waitTime = time

  setTimeout(() => {
    this.isTired = false
  }, time)
  return this.forEach(cb)
}

const callback = (e, i) => {
  console.log(e + i);
};

const test1 = arr.tiredForEach(callback, 180);
/*
prints out:
chinese0
african1
korean2
*/

const test2 = a.tiredForEach(callback, 180);
/*
prints out:
"Too tired. Please wait 180ms.
*/

const test3 = setTimeout(() => {
// run tiredForEach after 190ms
  arr.tiredForEach(callback, 180);
}, 190);

console.log(test1, 'test1')
console.log(test2, 'test2')
console.log(test3, 'test3')
/*
... 190ms later....
prints out:
chinese0
african1
korean2
*/
