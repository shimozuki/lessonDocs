const selectiveZero = (arr, num, i=0) => {
  if (i === arr.length) return arr
  if (num === arr[i]) { arr[i] = 0 }
  return selectiveZero(arr, num, i+1)
}

const a = selectiveZero([5,2,2,9], 2)
console.log(a, [5,0,0,9])
