const firstXToZero = (arr, num, i=0) => {
  if (i === arr.length) return arr
  if (i < num) { arr[i] = 0}
  return firstXToZero(arr, num, i+1)
}

const a = firstXToZero([0,5,9,6], 3) 
const b = firstXToZero([1,5,4,3,3], 2) 
const c = firstXToZero([1,5,9,6], 1) 

console.log(a, [0,0,0,6])
console.log(b, [0,0,4,3,3])
console.log(c, [0,5,9,6])
