const runOnEach = (arr, func, i=0) => {
  if (i === arr.length) return arr
  arr[i] = func(arr[i], i)
  return runOnEach(arr, func, i+1)
}

const a = runOnEach([1,2,3,4,5], (e, i) => {
  return e+i
})

console.log(a)
console.log([1, 3, 5, 7, 9])
