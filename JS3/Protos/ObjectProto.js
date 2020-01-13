Object.prototype.forEach = function(fn, i = 0, entries = Object.entries(this)) {
  if (i === entries.length) return 'forEach';
  const [key, value] = entries[i];
  fn(key, value, i, entries);
  return this.forEach(fn, i + 1, entries);
};

Object.prototype.filter = function(fn,  newObj = {}, i = 0, keys = Object.keys(this)) {
  if (i === keys.length) return newObj;
  const key = keys[i];
  if (fn(key, this[key])) {
    newObj[key] = this[key];
  }
  return this.filter(fn, newObj, i + 1, keys);
};

Object.prototype.reduce = function(fn, acc = 0, i = 0, entries = Object.entries(this)) {
  if (i === entries.length) return acc;
  const [key, value] = entries[i];
  acc += fn(acc, key, value, i, this);
  return this.reduce(fn, acc, i + 1, entries);
};

Object.prototype.map = function(fn, i = 0, entries = Object.entries(this), newObj = {}) {
  if (i === entries.length) return newObj;
  const [key, value] = entries[i];
  {
    newObj[key] = fn(this[key], value, i, this);
  }
  return this.map(fn, i + 1, entries, newObj);
};

const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

/*
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
*/

/*
console.log(result1, 'forEach')
console.log(" ")
console.log(result2, 'filter')
console.log(" ")
console.log(result3, 'reduce')
console.log(" ")
console.log(result4, 'map')
*/

Array.prototype.getCharCount = function(i = 0, obj = {}) {
  const addChar = (map, str, i = 0) => {
    if (i === str.length) {
      return map;
    }
    const letter = str[i];
    map[letter] = map[letter] || 0;
    map[letter] = map[letter] + 1;
    return addChar(map, str, i + 1);
  };
  return this.reduce((acc, e) => {
    return addChar(acc, e);
  }, {});
};

const a = ['Charmander', 'Charmeleon', 'Charizard'].getCharCount();
console.log(a, 'get char count');
/*
Returns
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

Array.prototype.counts = function() {
  return this.reduce((acc, e) => {
    const countThisElement = (i=0) => {
      if (i === acc.length)
        return acc.push({element: e, count: 1})
      if (acc[i].element === e)
        return acc[i].count = acc[i].count + 1
      return countThisElement(i+1)
    }
    countThisElement()
    return acc
  }, [])
}

Array.prototype.getMostCommon = function(i=0, obj={}) {
  if (this.length === 0) return null
  const frequencies = this.counts()
  const winner = frequencies.reduce((currentWinner, e) => {
    if (e.count > currentWinner.count) return e
    return currentWinner
  })
  return winner.element
}


const b = [9, 8, 7, 8, 7, 7, 7].getMostCommon();
// returns 7 because it is the most common element

const c = ['Batman', 8, 7, 'Batman', 'Robin'].getMostCommon();
// returns "Batman" because it is the most common element

console.log(b, 7);
console.log(c, 'Batman');
