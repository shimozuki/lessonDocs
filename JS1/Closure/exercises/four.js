const callWith = (num) => {
  return (callback) => {
    return callback(num)
  }
}

const fun = callWith(10)

let b = fun((num) => {
  return num + 5
})

console.log(b, 15)

b = fun((num) => {
  return num + "hello"
})

console.log(b, "10hello")

b = fun((num) => {
  return 500 % num
})

console.log(b, 0)
