const sumEvens = (num, i=2, sum=0) => {
  if (num < 2) return 0
  if (i === num) return sum
  if (i % 2 === 0) {sum += i}
  return sumEvens(num, i+1, sum)
}

const a = sumEvens(5)
console.log(a)

const b = sumEvens(1)
console.log(b)

