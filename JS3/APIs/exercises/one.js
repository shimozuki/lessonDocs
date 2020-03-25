const request = require('request')
request('https://c0d3.com/api/lessons', (err, res, data) => {
  if (err) throw err

  const c0d3Data = JSON.parse(data)

  c0d3Data.forEach((e) => {
    console.log(e.title, 'titles')
  })
})
