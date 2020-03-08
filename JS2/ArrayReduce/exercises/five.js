const combineLess5 = (arr) => {
  return arr.reduce((acc, curr) => {
    if (curr.length < 5) {
      acc += curr
    }

    return acc
  }, '')
}

/*
const combineLess5 = (arr, i=0, res='') => {
  if (i === arr.length) return res
  if (arr[i].length < 5) { res += arr[i] }
  return combineLess5(arr, i+1, res)
}
*/

const a = combineLess5(["Thor", "Loki", "Ant-Man", "Rocket", "Wasp"])

console.log(a, 'a')
