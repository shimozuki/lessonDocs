const isPrime = (num, i=2) => {
  if (i === num) return true
  if (num < 2) return false
  if (num % i === 0) return false
  return isPrime(num, i+1)
}

const firstPrime = (arr) => {
  return arr.find((e,i) => {
    if (isPrime(e)) {
      return e
    }
  })
}

/*
const firstPrime = (arr, i=0) => {
  if (i === arr.length) return 0
  if (isPrime(arr[i])) return arr[i]
  return firstPrime(arr, i+1)
}
*/

const a = firstPrime([1,2,3,4,5])
console.log(a, 2)
