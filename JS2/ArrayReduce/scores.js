const scores = [22, 28, 80, 48, 32]

const addNumbers = scores.reduce((acc, e) => {
  console.log(acc, e)
  return acc + e
}, 19)

console.log(addNumbers, 'addNumbers')
