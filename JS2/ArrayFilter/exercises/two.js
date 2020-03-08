const isPrime = (num, i=2) => {
  if (i === num) return true
  if (num < 2) return false
  if (num % i === 0) return false
  return isPrime(num, i+1)
}

const primesOnly = (arr) => {
  return arr.filter((e, i) => {
    if (isPrime(e)) { return e}
  })
}

/*
const primesOnly = (arr, i=0, res=[]) => {
  if (i === arr.length) return res
  if (isPrime(arr[i])) { res.push(arr[i]) }
  return primesOnly(arr, i+1, res)
}
*/

const a = primesOnly([1,2,3,4,5])

console.log(a, 'a')
