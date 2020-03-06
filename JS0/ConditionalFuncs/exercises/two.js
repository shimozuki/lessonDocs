const sumOrTen = (a, b) => {
  if ((a && b) > 10) {
    return 10
  } else {
    return a + b
  }
}

const a = sumOrTen(9, 10)
const b = sumOrTen(15, 14)

console.log(a, 19)
console.log(b, 10)

