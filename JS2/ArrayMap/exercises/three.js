const firstXToZero = (arr, num) => {
  return arr.map((x, i) => {
    if (i >= num) {
      return x
    }
    return 0
  })
}

/*
const firstXToZero = (arr, num, i=0, res=[]) => {
  if (i === arr.length) return res
  if (i >= num) { 
    res.push(arr[i])
  } else {
    res.push(0)
  }
  return firstXToZero(arr, num, i+1, res)
}
*/

const a = firstXToZero([9,1,2,2,9], 3)
const b = firstXToZero([1,2,3,4,5], 2)
const c = firstXToZero([6,7,8], 3)

console.log(a)
console.log(b)
console.log(c)
