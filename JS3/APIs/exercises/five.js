const request = require('request')

request('https://pokeapi.co/api/v2/pokemon/', (err, res, body) => {
  const parsedJson = JSON.parse(body)
  const pokemonList = []
  parsedJson.results.forEach((thisPokemon) => {
    const name = thisPokemon.name
    request(thisPokemon.url, (err, pokeRes, pokeBody) => {
      const data = JSON.parse(pokeBody)
      const weight = data.weight
      pokemonList.push({
        name:name,
        weight:weight
      })
      if (parsedJson.results.length === pokemonList.length) {
        const heaviest = pokemonList.reduce((acc,poke) => {
          if (poke.weight >= acc.weight) {
            return poke
          }
          return acc
        }, pokemonList[0])
    console.log(`Heaviest Pokemon is ${heaviest.name}`)
      }
    })
  })
})
