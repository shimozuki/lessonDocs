const data = []
setTimeout(() => {
  const newObj = data
  console.log(newObj.name, 'third', 300)
  newObj.name = "hello"
  console.log(newObj.name, 'fourth', 'hello')
}, 10)

setTimeout(() => {
  const newObj = data
  console.log(newObj.name, 'second', undefined)
  newObj.name = 300
}, 5)

console.log(data.name, 'first', undefined)
