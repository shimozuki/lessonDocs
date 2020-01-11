allFuns = {};

Array.prototype.getCharCount = function() {
  const addChar = (map, str, i=0) => {
    if (i === str.length) return map
    const letter = str[i]
    map[letter] = map[letter] || 0
    map[letter] = map[letter] + 1
    return addChar(map, str, i + 1)
  }
  return this.reduce((acc, e) => {
    return addChar(acc, e)
  }, {})
}

const a = ['Charmander', 'Charmeleon', 'Charizard'].getCharCount()
console.log(a, 'getCharCount')


module.exports = allFuns;
