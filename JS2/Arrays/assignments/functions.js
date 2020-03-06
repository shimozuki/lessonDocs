const fruitPrices = [100, 150, 200]

const addTax = (arr, i=0) => {
  if (i === arr.length) { return arr }
  arr[i] = arr[i] * 1.1
  return addTax(arr, i+1)
}

const cost = addTax(fruitPrices)

const isSame = fruitPrices === cost

console.log('cost', cost)
console.log([110, 165, 220])
console.log(" ")

console.log('isSame', isSame)
console.log(true)

