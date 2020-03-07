const onlyIndex = (arr, num, i=0, j=0, res=[]) => {
  if (i === arr.length) {
    return res 
  }

  if (j === arr[i].length) {
    return onlyIndex(arr, num, i+1, j=0, res)
  }

  if (j === num) {
    res.push(arr[i][j])
  }

  return onlyIndex(arr, num, i, j+1, res)
}

const a = onlyIndex([
  [1,2,3,4,5],
  [6,9,8,7,6],
  [4,5,6,6,7],
  [0,1,2,3,9]
], 2)

console.log(a)
