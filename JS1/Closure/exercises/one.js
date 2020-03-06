const hello3x = () => {
  let count = 0
  return () => {
    count += 1
    if (count <= 3) {
      return "hello"
    }
    return ""
  }
}

const threeF = hello3x()

let b = threeF()
console.log(b, 'hello')

b = threeF()
console.log(b, 'hello')

b = threeF()
console.log(b, 'hello')

b = threeF()
console.log(b, '')

