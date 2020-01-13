allFuns = {};

const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong",
}

Object.prototype.forEach = function(fn, i=0, entries=Object.entries(this)) {
	if (i === entries.length) return
	const [key, value] = entries[i]
	fn(key, value, i, this)
	return this.forEach(fn, i+1, entries)
}

Object.prototype.filter = function(fn, i=0, newObj={}, entries=Object.entries(this)) {
  if (i === entries.length) return newObj
  const [key, value] = entries[i]
  if (fn(key, value, i, this)) { newObj[key] = this[key]}
  return this.filter(fn, i+1, newObj, entries)
}

Object.prototype.reduce = function(fn, acc=0, i=0, entries=Object.entries(this)) {
  if (i === entries.length) return acc
  const [key,value] = entries[i]
  acc += fn(acc, key, value, i, this)
  return this.reduce(fn, acc, i+1, entries)
}

Object.prototype.map = function(fn, i=0, newObj={}, entries=Object.entries(this)) {
  if (i === entries.length) return newObj 
  const [key, value] = entries[i]
  newObj[key] = fn(key, value, i, this)
  return this.map(fn, i+1, newObj, entries)
}

/*
const count = (arr, i=0, obj={}) => {
  if (i === arr.length) return obj
  obj[arr[i]] = (obj[arr[i]] || 0) + 1
  return count(arr, i+1, obj)
}
*/

const count = (arr) => {
  return arr.reduce((acc, curr) => {
    console.log(acc, 'accumulator')
    console.log(curr.split(''), 'current')

  }, {})
}

const arr = ['Charmander', 'Charmeleon', 'Charizard']

console.log('count', count(arr)) 

/*
Object.prototype.getCharCount = function(){}
*/

/*
Object.prototype.getMostCommon() = function() {}
*/

/*
const result1 = info.forEach( (key, value, i) => {
  console.log(key, value, i)
})

const result2 = info.filter( (key, value) => {
  return key[0] === 'i' || value[0] === 'n'
})

const result3 = info.reduce( (acc, key, value, i) => {
  return acc + `${key}-${i}-${value},`
}, "")

const result4 = info.map((key, value, i) => {
  return `${key} is very ${value} at index: ${i}`
})
*/

//const a = ['Charmander', 'Charmeleon', 'Charizard'].getCharCount()

//const b = [9,8,7,8,7,7,7].getMostCommon()
// returns 7 because it is the most common element

//const c = ["Batman", 8,7, "Batman", "Robin"].getMostCommon()
// returns "Batman" because it is the most common element


/*
console.log('for each', result1)
console.log(" ")
console.log('filter', result2)
console.log(" ")
console.log('reduce', result3)
console.log(" ")
console.log("map", result4)
console.log(" ")
*/
//console.log('get char count', a)
//console.log(" ")
//console.log('get most common', b)
//console.log(" ")
//console.log('get most common', c)


// Will print out the following:
/*
 ---FOR EACH---
"ironman" "arrogant" 0
"spiderman" "naive" 1
"hulk" "strong" 2
*/

/*
---FILTER---
{
  ironman: "arrogant",
  spiderman: "naive"
}
*/

/*
---FILTER---
ironman-0-arrogant,spiderman-1-naive,hulk-2-strong,
*/

/*
---MAP---
ironman is very arrogant
spiderman is very naive
hulk is very strong
*/

/*
--- GET CHAR COUNT --
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


module.exports = allFuns;
