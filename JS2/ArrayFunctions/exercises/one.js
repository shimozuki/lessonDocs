const copyArray = (arr, i=0, newArr=[]) => {
  if (i === arr.length) return newArr
  newArr.push(arr[i])
  return copyArray(arr, i+1, newArr)
}

console.log(copyArray(["Rocket", "Groot", "Star-Lord"]))
