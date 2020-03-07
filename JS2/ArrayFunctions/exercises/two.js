const removeElement = (arr, ele, i=0) => {
  if (i === arr.length) return arr
  if (arr[i] === ele) {
    arr.splice(i, 1)
    i -= 1
  }
  return removeElement(arr, ele, i+1)
}

const a = ["Rocket", "Groot", "Groot", "Star-Lord"]
const b = removeElement(a, "Groot")
const c = b === a

console.log(b, 'removed')
console.log(c)
