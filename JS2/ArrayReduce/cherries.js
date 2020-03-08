const cherries = [1,2,3]
const tomatoes = [5,6,7].reduce((farm, weight, tax) => {
  if (weight > 5) farm.push(weight + tax)
  return farm
}, cherries)

console.log(tomatoes, 'tomatoes')
console.log([1,2,3,7,9])

