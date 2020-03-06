const isPrime = (num, i=2) => {
  if (num < i) return false
  if (num === i) return true
  if (num % i === 0) return false
  return isPrime(num, i+1)
}

const allPrime = (arr, i=0) => {
  if (i === arr.length) return true
  if (!isPrime(arr[i])) return false
  return allPrime(arr, i+1)
}

const a = allPrime([2,7,9,10])
const b = allPrime([19, 13, 17, 11])

console.log(a, false)
console.log(b, true)
