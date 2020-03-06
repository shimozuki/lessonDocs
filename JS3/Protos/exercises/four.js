Array.prototype.getCharCount = function(i=0, newObj={}) {
  if (i === this.length) return newObj
  this[i].split('').reduce((acc, curr) => {
    newObj[curr] = (newObj[curr] || 0) + 1
    return acc
  }, newObj)
  return this.getCharCount(i+1, newObj)
}


const a = ['Charmander', 'Charmeleon', 'Charizard'].getCharCount()
console.log(a)

/*
* Returns
{
  C: 3,
  h: 3,
  a: 5,
  r: 5,
  m: 2,
  n: 2,
  d: 2,
  e: 3,
  l: 1,
  o: 1,
  i: 1,
  z: 1
}
*/
