const request = require('request')
const fs = require('fs')

/*
const a = request("https://c0d3.com/api/lessons", (err, res, data)=> {
  const parsedJSON = JSON.parse(data)
  parsedJSON.forEach((thisLesson) => {
    console.log(thisLesson.title)
  })
})

console.log('request', a)

const b = request("https://c0d3.com/api/lessons", (err, res, data) => {
  const parsedJSON = JSON.parse(data)
  parsedJSON.forEach((thisLesson) => {
    console.log(`<h1>${thisLesson.title}</h1>`)
  })
})

console.log('request2', b)

const c = request("https://api.openaq.org/v1/countries", (err, res, data) => {
  const countries = JSON.parse(data).results
  const mostCities = countries.reduce((acc, elem) => {
    if (!acc.name || elem.cities > acc.cities)
      return {name: elem.name, cities: elem.cities}
    return acc
  }, {})
  console.log(mostCities.name)
})

console.log('request3', c)
*/

/*
const d = request("https://pokeapi.co/api/v2/pokemon/", (err, res, data) => {

  const request = require('request');

    request('https://pokeapi.co/api/v2/pokemon/', (err, res, body) => {
      const parsedJson = JSON.parse(body);
      const pokemonList = [];
      parsedJson.results.forEach((thisPokemon) => {
        const name = thisPokemon.name
        request(thisPokemon.url, (err, pokeRes, pokeBody) => {
          const data = JSON.parse(pokeBody)
          const weight = data.weight
          pokemonList.push({
            name:name,
            weight: weight
          }) // Shorter syntax: {name, weight}
          if (parsedJson.results.length === pokemonList.length) {
            const heaviest = pokemonList.reduce((acc, poke) => {
              if (poke.weight >= acc.weight) {
                return poke
              }
              return acc
      }, pokemonList[0])
      console.log(`Heaviest Pokemon is ${heaviest.name} at ${heaviest.weight} pounds`)
      }
    })
  })
})
})

console.log('request4', d)
*/

const e = request('https://pokeapi.co/api/v2/pokemon?limit=100', )

console.log(e)

