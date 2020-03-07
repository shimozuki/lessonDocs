const firstLetters = (arr) => {
  return arr.map((x) => {
    return x[0]
  })
}

/*
const firstLetters = (arr, i=0, res=[]) => {
  if (i === arr.length) return res
  res.push(arr[i][0])
  return firstLetters(arr, i+1, res)
}
*/

const a = firstLetters(["hello", "my", "name", "is", "pikachu"])

console.log(a)
