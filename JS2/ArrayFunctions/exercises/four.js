const copyReverse = (arr, i=arr.length -1, res=[]) => {
  if (i < 0) return res
  res.push(arr[i])
  return copyReverse(arr, i-1, res)
}

const a = copyReverse([5, 2, 2, 9])
console.log(a)
