const fetch = require('node-fetch')
const fs = require('fs')

const apiUrl = 'https://c0d3.com/api/lessons'
fetch(apiUrl)
.then(res => {
  return res.json()
})
.then(data => {
  const result = data.reduce((acc, lesson) => { 
    acc += `<h1>${lesson.title}</h1>`
    return acc
  }, '')

  fs.writeFile('five.html', result, () => {
    console.log("five.html has been written")
  })
})
