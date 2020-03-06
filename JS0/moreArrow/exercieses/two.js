const solution = () => {
  return () => {
    console.log(1)
    console.log(1)
    console.log(1)
  }
}

const a = solution()
const b = a()

console.log('print 1 three times')
console.log(a, '[Function: (anonymous)]')
console.log(b, undefined)
