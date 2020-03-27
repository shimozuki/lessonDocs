const fetch = require('node-fetch');

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
fetch(apiUrl)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const fetchPromise = data.results.map(e => {
      return fetch(e.url).then(res => {
        return res.json();
      });
    });
    return Promise.all(fetchPromise);
  })
  .then(dataList => {
    return dataList.reduce((acc, pokemon) => {
      if (acc.weight > pokemon.weight) {
        return acc;
      }
      return pokemon;
    }, dataList[0]);
  })
  .then(pokemon => {
    console.log(pokemon.name);
  });
