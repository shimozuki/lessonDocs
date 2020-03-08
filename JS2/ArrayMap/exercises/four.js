const isPrime = (num, i=2) => {
  if (num < 2) return false 
  if (num === i) return true
  if (num % i === 0) return false
  return isPrime(num, i+1)
}

const nonPrimeToZero = (arr) => {
  return arr.map((e, i) => {
    if (isPrime(arr[i])) {
      return e
    }
    return 0
  })
}

/*
const nonPrimeToZero = (arr, i=0, res=[]) => {
  if (i === arr.length) return res
  if (isPrime(arr[i])) { 
    res.push(arr[i])
  } else {
    res.push(0)
  }
  return nonPrimeToZero(arr, i+1, res)
}
*/

const a = nonPrimeToZero([1,2,3,4,5])

console.log(a)

