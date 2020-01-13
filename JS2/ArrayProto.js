Array.prototype.cReduce = function(fn, acc=0, i=0) {
  if (i === this.length) return acc
  acc = fn(acc, this[i], i, this)
  return this.cReduce(fn, acc, i+1)
}

Array.prototype.cFilter = function(fn, acc, i=0, newArr=[]) {
  if (i === this.length) return newArr
  if (fn(this[i], i, this))  {newArr.push(this[i])}
  return this.cFilter(fn, acc, i+1, newArr)
}

Array.prototype.cForEach = function(fn, i=0) {
  if (i === this.length) return 
  fn(this[i], i, this)
  return this.cForEach(fn, i+1)
}

Array.prototype.cMap = function(fn, i = 0, newArr = []) {
  if (i === this.length) return newArr
  newArr.push(fn(this[i]))
  return this.cMap(fn, i+1, newArr)
}

const a = [1, 2, 3].reduce((acc, curr) => acc += curr)
const b = [1, 2, 3].cReduce((acc, curr) => acc += curr)

const c = [1, 2, 3].map(x => x * 5)
const d = [1, 2, 3].cMap(x => x * 5)

const e = [1, 2, 3].forEach(x => console.log(x))
console.log(" ")
const f = [1, 2, 3].cForEach(x => console.log(x))

const g = [1, 2, 3].filter(x => x > 2)
const h = [1, 2, 3].cFilter(x => x > 2)

console.log(" ")
console.log(a)
console.log(b)
console.log(" ")
console.log(c)
console.log(d)
console.log(" ")
console.log(e)
console.log(f)
console.log(" ")
console.log(g)
console.log(h)
