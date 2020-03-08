const append = (arr, ele) => {
  return arr.map((e, i) => {
    return e + ' ' + ele
  })
}

/*
const append = (arr, ele, i=0, res=[]) => {
  if (i === arr.length) return res 
  res.push(arr[i] + ' ' + ele )
  return append(arr, ele, i+1, res)
}
*/

const a = append(["hello", "my", "name", "is", "pikachu"], '-log')

console.log(a)
