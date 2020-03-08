const ages = [22, 28, 80, 48, 32]
const add5InPlace = (elem, idx, arr) => {
  //arr[idx] = arr[idx] + 5
  arr[idx] = elem + 5
  //elem = arr[idx] + 5 // won't work
  //elem = elem + 5 // won't work
}

console.log(ages, 'ages')
ages.forEach(add5InPlace)
console.log(ages, 'ages + 5')

