const largestReduce = (arr) => {
  return arr.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr
    }
    return acc
  }, -Infinity)
}

/*
const largestReduce = (arr, i=0, res=-Infinity) => {
  if (i === arr.length) return res
  if (arr[i] > res) { res = arr[i] }
  return largestReduce(arr, i+1, res)
}
*/

const a = largestReduce([9,8,16,2,3])

console.log(a, 'a')
