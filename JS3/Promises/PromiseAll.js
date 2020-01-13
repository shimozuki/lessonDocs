const fetch = require('node-fetch')

const pokeNumbers = [
  37,
  38,
  39,
  40
]

console.log('pokeNumbers', pokeNumbers)

const arrayPromises = pokeNumbers.map((num) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then((result) => {
    return result.json()
  })
})

console.log('arrayPromises', arrayPromises)

const result = Promise.all(arrayPromises).then((results) => {
  results.forEach((e) => {
    console.log(`${e.name} weighs ${e.weight}`)
  })
})

console.log('result', result)

Promise.all(arrayPromises)
.then((results) => {
  results.forEach((e) => {
    console.log(`${e.name} weighs ${e.weight}`)
  })
})
