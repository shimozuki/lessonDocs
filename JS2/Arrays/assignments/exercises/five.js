const increasing = (arr, i=0) => {
  if (i === arr.length) return true
  if (arr[i - 1] >= arr[i] || arr[i] >= arr[i + 1]) {
    return false
  }
  return increasing(arr, i+1)
}

const a = increasing([2,7,9,10])
const b = increasing([19,13,17,11])
const c = increasing([2,7,7,10])

console.log(a, true)
console.log(b, false)
console.log(c, false)
