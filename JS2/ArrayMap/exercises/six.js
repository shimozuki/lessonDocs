const runOnEach = (arr, func) => {
  return arr.map((e, i) => {
    return func(e)
  })
}

/*
const runOnEach = (arr, func, i=0, res=[]) => {
  if (i === arr.length) return res
  res.push(func(arr[i]))
  return runOnEach(arr, func, i+1, res)
}
*/

const a = runOnEach(["hello", "my", "name", "is", "pikachu"], (e) => {
  return e.toUpperCase()
})

const b = runOnEach([1, 32, 904, 2955], (e) => {
  return e % 2
})


console.log(a)
console.log(b)
