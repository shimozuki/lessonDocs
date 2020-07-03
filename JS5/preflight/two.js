let counter = 1
setTimeout(() => {
  console.log(counter, 'second', 1)
  counter += 1
  console.log(counter, 'third', 2)
}, 1)

console.log(counter, 'first', 1)
