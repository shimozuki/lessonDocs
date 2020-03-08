const longest = (arr) => {
  return arr.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      acc = curr
    }
    return acc
  }, '')
}

/*
const longest = (arr, i=0, res='') => {
  if (i === arr.length) return res
  if (arr[i].length > res.length) { res = arr[i] }
  return longest(arr, i+1, res)
}
*/

const a = longest(["Thor", "Loki", "Ant-Man", "Rocket"])

console.log(a, 'a')
