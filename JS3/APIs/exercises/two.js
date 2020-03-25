const request = require('request')
const fs = require('fs')

request('https://c0d3.com/api/lessons', (err, res, data) => {
  if (err) throw err

  const c0d3Data = JSON.parse(data)

  const htmlData = c0d3Data.reduce((acc, curr) => {
    acc += '<h1>' + curr.title + '</h1>'
    return acc
  }, '')

  fs.writeFile('./lessons.html', htmlData, () => {

  })
})
