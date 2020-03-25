const request = require('request')

request("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20", (err, res, data) => {
  console.log(data, 'data')
  const pokeInfo = JSON.parse(data)
  console.log('results', pokeInfo.results)
})
