const sum = (arr) => {
  return arr.reduce((acc, curr) => {
    acc += curr
    return acc
  }, 0)
}

/*
const sum = (arr, i=0, res=0) => {
  if (i === arr.length) return res 
  res += arr[i]
  return sum(arr, i+1, res)
}
*/

const a = sum([9,8,6,2,3])

console.log(a, 'a')
