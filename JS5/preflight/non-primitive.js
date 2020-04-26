const data = {}
setTimeout(() => {
  const newObj = data
  console.log(newObj.name, 'new obj name', 300) 
  newObj.name = "hello"
  console.log(newObj.name, 'new obj name', "hello") 
}, 10)

setTimeout(() => {
  const newObj = data
  console.log(newObj.name, 'new obj name', undefined)
  newObj.name = 300
}, 5)

console.log(data.name, 'data name', undefined)

