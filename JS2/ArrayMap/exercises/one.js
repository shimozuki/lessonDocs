const oddToZero = (arr) => {
  return arr.map((x, i) => {
    if (x % 2 !== 0) {
      return x = 0
    }
    return x
  })
}

/*
const oddToZero = (arr,i=0) => {
  if (i === arr.length) return arr
  if (arr[i] % 2 !== 0) { arr[i] = 0}
  return oddToZero(arr, i+1)
}
*/

const a = oddToZero([1,2,3,4,5])
console.log(a)
