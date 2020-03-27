const request = require('request');
const fs = require('fs');

request('https://pokeapi.co/api/v2/pokemon?limit=100', (err, res, body) => {
  const parsedJson = JSON.parse(body);
  const pokemonList = [];
  parsedJson.results.forEach(thisPokemon => {
    const name = thisPokemon.name;
    request(thisPokemon.url, (err, pokeRes, pokeBody) => {
      const data = JSON.parse(pokeBody);
      pokemonList.push(data);

      const htmlData = pokemonList.reduce((acc, curr) => {
        acc += `
      <div style="text-align:center;">
      <h1>
       ${curr.name}
       </h1>
       <img src="${curr.sprites.front_default}" alt="${curr.name}"/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        </div>
         `;
        return acc;
      }, '');

      fs.writeFile('./oneHundred.html', htmlData, () => {
        console.log('Names have been written');
      });
    });
  });
});
