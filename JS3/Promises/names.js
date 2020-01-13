const fetch = require('node-fetch')
const fs = require('fs')
const names = []

fetch('https://pokeapi.co/api/v2/pokemon/')
.then((res) => {
  return res.json()
}).then((data) => {
  const names = data.results.reduce((acc, f) => {
    return `${acc}<h1>${f.name}</h1>`
  }, '')
  fs.writeFile('names.html', names, () => {})
})

