const request = require('request');
const fs = require('fs');

request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
  if (err) throw err;

  const pokeData = JSON.parse(data);
  console.log(pokeData, 'poke data')

  const htmlData = pokeData.results.reduce((acc, curr) => {
    acc += '<h1>' + curr.name + '</h1>';
    return acc;
  }, '');

  fs.writeFile('./names.html', htmlData, () => {
    console.log("Names have been written")
  });
});
