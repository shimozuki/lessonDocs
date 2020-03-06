const combineIfOver42 = (num) => {
  if (num > 42) {
    return "hello world"
  } else {
    return ""
  }
}

const a = combineIfOver42(10)
const b = combineIfOver42(100)

console.log(a, "")
console.log(b, "hello world")
