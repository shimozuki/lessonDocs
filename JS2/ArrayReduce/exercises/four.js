const matches = (arr, ele) => {
  return arr.reduce((acc, curr) => {
    if (curr === ele) {
      acc += 1
    }
    return acc
  }, 0)
}

/*
const matches = (arr, ele, i=0, res=0) => {
  if (i === arr.length) return res
  if (arr[i] === ele) { res += 1 }
  return matches(arr, ele, i+1, res)
}
*/

const a = matches(["Thor", "Loki", "Ant-Man", "Loki"], "Loki")

console.log(a, 'a')
