const solution = () => {
  counter = 0
  return () => {
    counter = counter + 1
    if (counter < 3) {
      return 0
    }
    return counter
  }
}

const arya = solution()
console.log(arya, '[Function: (anonymous)]')

let res = arya()
console.log(res, 0)

const sansa = solution()
console.log(sansa, '[Function: (anonymous)]')

res = arya() + sansa()
console.log(res, 3) // 1 + 2

res = arya() + sansa()
console.log(res, 7) // 3 + 4

res = arya() + sansa()
console.log(res, 11) // 5 + 6

res = arya() + sansa()
console.log(res, 15) // 7 + 8

res = arya() + sansa()
console.log(res, 19) // 9 + 10

res = arya() + sansa()
console.log(res, 23) // 11 + 12 
