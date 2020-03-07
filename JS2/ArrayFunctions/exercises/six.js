const copyFirst = (arr, num, i=0, newArr=[]) => {
  if (i > num) return newArr
  newArr.push(arr[i])
  return copyFirst(arr, num, i+1, newArr)
}

const a = copyFirst(["Ironman", "Thor", "Captain", "Black Widow", "Hulk"], 2)
console.log(a)
