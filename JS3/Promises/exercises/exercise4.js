const fetch = require('node-fetch')
const fs = require('fs')

let record = 0
let city = ''

fetch('https://api.openaq.org/v1/countries')
.then((res) => {
  return res.json()
}).then((data) => {

  const names = data.results.reduce((acc, curr) => {

    if (curr.cities > record) {
      record = curr.cities
      city = curr.name 
    }
  }, city)
})
.then(() => {console.log(city)})

const apiUrl = 'https://api.openaq.org/v1/countries'
fetch(apiUrl).then((res) => {
  return res.json()
}).then((data) => {
  const max = data.results.reduce((acc, f) => {
    if (f.cities > acc.cities) {
      return f
    }
    return acc
  }, data.results[0])
  console.log(max.name)
})
