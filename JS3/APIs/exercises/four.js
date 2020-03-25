const request = require('request');
const fs = require('fs');

request('https://api.openaq.org/v1/countries', (err, res, data) => {
  if (err) throw err;

  const pokeData = JSON.parse(data);
  //console.log(pokeData, 'poke data');
  let result = ''
  let maxCountries = 0

  const htmlData = pokeData.results.forEach((e) => {
    /*
    console.log(e.cities, 'countries')
    console.log(e.name, 'name')
    */

    if (e.cities > maxCountries) {
      result = e.name
      maxCountries = e.cities
    }
  });

  console.log('result', result)
});
