const arr = []

const solution = (data) => {
  arr.push(data)
}

console.log(arr, 'arr', [])

const arr2 = [1,2,3]
arr2.forEach(() => {
  arr.push(arr2)
})

console.log(arr, 'arr')
console.log([[1,2,3], [1,2,3], [1,2,3]])
console.log(" ")

console.log(arr2, 'arr2')
console.log([1,2,3])
console.log(" ")

arr2[2] = "three"

console.log(arr, 'arr')
console.log([[1,2,"three"], [1,2,"three"], [1,2,"three"]])
console.log(" ")

console.log(arr2, 'arr2')
console.log([1,2,"three"])
