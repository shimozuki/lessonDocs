const largest = (arr, i=0, max=-Infinity) => {
  if (i === arr.length) return max 
  if (arr[i] > max) { max = arr[i]}
  return largest(arr, i+1, max)
}

const a = largest([5,3,9])
const b = largest([-20, -2, -5, -10])

console.log(a, 9)
console.log(b, -2)
