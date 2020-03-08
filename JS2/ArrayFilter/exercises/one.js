const noMoreEvens = (arr) => {
  return arr.filter((e, i) => {
    if (e % 2 !== 0) { return e}
  })
}

/*
const noMoreEvens = (arr, i=0, res=[]) => {
  if (i === arr.length) return res
  if (arr[i] % 2 !== 0) { res.push(arr[i]) }
  return noMoreEvens(arr, i+1, res)
}
*/

const a = noMoreEvens([1,2,6,4,5])

console.log(a)
