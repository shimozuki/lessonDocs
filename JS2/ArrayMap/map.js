const ages = [22, 28, 80, 48, 32]

const add5 = (x) => {
  return x + 5
}

const fiveYearsLater = ages.map(add5)
console.log(fiveYearsLater)

const melon  = (delta, wax) => {
  return delta + wax + 1
}

const peppers = [5,6,6].map(melon).map(melon)
console.log(peppers, 'peppers')
console.log([7, 10, 12])
