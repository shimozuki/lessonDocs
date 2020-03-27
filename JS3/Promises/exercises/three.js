const axios = require('axios')
const allData = []

axios('https://api.openaq.org/v1/countries').then((payload) => {
  let largest = ''
  let maxCities = 0
  console.log(payload.data.results, 'pay')
  payload.data.results.forEach((e) => {
    if (e.cities > maxCities) {
      largest = e.name
      maxCities = e.cities
    }
  })

  console.log(largest, 'largest')
  return
})
