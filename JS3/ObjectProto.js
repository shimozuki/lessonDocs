Object.prototype.forEach = function(fn, i=0, entries=Object.entries(this)) {
  if (i === entries.length) return 'forEach'
  const [key, value] = entries[i]
  fn(key, value, i, entries)
  return this.forEach(fn, i+1, entries)
}

Object.prototype.filter = function(fn, newObj={}, i=0, keys=Object.keys(this)) {
  if (i === keys.length) return newObj 
  const key = keys[i]
  if (fn(key, this[key])) {newObj[key] = this[key]}
  return this.filter(fn, newObj,  i+1, keys)
}

Object.prototype.reduce = function(fn, acc=0, i=0, entries=Object.entries(this)) {
  if (i === entries.length) return acc
  const [key, value] = entries[i]
  acc += fn(acc, key, value, i, this)
  return this.reduce(fn, acc, i+1, entries)
}

Object.prototype.map = function(fn, i=0, entries=Object.entries(this), newObj={}) {
  if (i === entries.length) return newObj
  const [key, value] = entries[i]
  {newObj[key] = fn(this[key], value, i, this)}
  return this.map(fn, i+1, entries, newObj)
}

const info = {
  ironman: "arrogant",
  spiderman: "naive",
  hulk: "strong",
}

const result1 = info.forEach( (key, value, i) => {
  console.log(key, value, i)
})

const result2 = info.filter((key, value) => {
  return key[0] === 'i' || value[0] === 'n'
})

const result3 = info.reduce( (acc, key, value, i) => {
  return acc + `${key}-${i}-${value},`
}, "")

const result4 = info.map((key, value) => {
  return value = `${key} is very ${value}` 
})

console.log(result1, 'forEach')
console.log(" ")
console.log(result2, 'filter')
console.log(" ")
console.log(result3, 'reduce')
console.log(" ")
console.log(result4, 'map')

