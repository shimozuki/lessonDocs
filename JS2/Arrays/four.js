const solution = (arr) => {
  return () => {
    return arr
  }
}

const a = solution([1,2,3])
const b = a()

console.log(b)
