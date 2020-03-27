const axios = require('axios');
const fs = require('fs');
const allData = [];

axios('https://pokeapi.co/api/v2/pokemon/').then(payload => {
  console.log(payload.data.results, 'pay');
  const htmlData = payload.data.results.reduce((acc, curr) => {
    acc += `
    <h1>${curr.name}</h1>
    `;
    return acc;
  }, '');

  fs.writeFile('two.html', htmlData, () => {
    console.log('two.html has been written!');
  });
});
