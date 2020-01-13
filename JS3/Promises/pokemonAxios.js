const axios = require('axios')
const allData = []

const result = axios('https://pokeapi.co/api/v2/pokemon/')
  .then((data) => {
  console.log('data results', data.data.results.forEach((e, i) => {
   console.log(e, 'element')
   console.log(e.name, 'element.name')
   console.log(e.url, 'url')
 }))
})

console.log('result', result)
