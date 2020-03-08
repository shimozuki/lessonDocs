const isPrime = (num, start=2) => {
  if (num < start) return false
  if (start === num) return true
  if (num % start === 0) return false
  return isPrime(num, start + 1)
}

const a = isPrime(3)
const b = isPrime(4)
const c = isPrime(5)
const d = isPrime(6)

console.log(a, 3)
console.log(b, 4)
console.log(c, 5)
console.log(d, 6)
