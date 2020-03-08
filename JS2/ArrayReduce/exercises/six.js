const largerThan5 = (arr) => {
  return arr.reduce((acc, curr) => {
    if (curr > 5) { acc.push(curr)}
    return acc
  }, [])
}

/*
const largerThan5 = (arr, i=0, res=[]) => {
  if (i === arr.length) return res
  if (arr[i] > 5) { res.push(arr[i]) }
  return largerThan5(arr, i+1, res)
}
*/

const a = largerThan5([5,9,2,6,5])

console.log(a, 'a')
