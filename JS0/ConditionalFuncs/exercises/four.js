const compareString = (str1, str2) => {
  return str1 === str2
}

const a = compareString("hello", "nice")
const b = compareString('a', 'a')

console.log(a, false)
console.log(b, true)
