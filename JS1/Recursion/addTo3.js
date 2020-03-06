const addTo3 = (counter=1, result=0) => {
  if (counter > 3) {
    return result
  }
  return addTo3(counter + 1, result + counter)
}

let res = addTo3
console.log(res, '[Function: addTo3]')

res = addTo3(2)
console.log(res, 5)

res = addTo3(2)
console.log(res, 5)

