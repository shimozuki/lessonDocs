const massiveOrSmall = (a,b) => {
  let sum = a + b

  if (sum > 100) {
    return "massive"
  } else {
    return "small"
  }
}

const a = massiveOrSmall(1, 2)
const b = massiveOrSmall(99, 10)

console.log(a, "small")
console.log(b, "massive")

