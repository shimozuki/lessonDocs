const fetch = require('node-fetch');
const fs = require('fs');
const lessons = [];

fetch('https://c0d3.com/api/lessons')
.then((res) => {
  return res.json()
}).then((data) => {
  const title = data.reduce((acc, f) => {
    return `${acc}<h1>${f.title}</h1>`
  }, '')
  fs.writeFile('title.html', title, () => {})
})
