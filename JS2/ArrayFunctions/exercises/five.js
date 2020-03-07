const copyLast = (arr, num, i=num, newArr=[]) => {
  if (i === arr.length) return newArr
  newArr.push(arr[i])
  return copyLast(arr, num, i+1, newArr)
}

const a = copyLast(["Ironman", "Thor", "Captain", "Black Widow", "Hulk"], 2)
console.log(a)
