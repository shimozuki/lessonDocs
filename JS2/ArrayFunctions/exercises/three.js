const copyWithout = (arr, num, i=0, newArr=[]) => {
  if (i === arr.length) return newArr
  if (arr[i] !== num) { newArr.push(arr[i]) }
  return copyWithout(arr, num, i+1, newArr)
}

const a = copyWithout([5, 2, 2, 9], 2)
console.log(a)
