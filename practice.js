const solution = (a, fun) => {
  return () => {
    newR = fun()
    if (a <= 0) {
      return null
    }
    a = a - 1
    return newR
  }
}

const b = solution(0, () => {
  console.log('hello')
  return 5
})

const c = b()

console.log(b, '[Function: solution]')
console.log(c, null)
