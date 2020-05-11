const express = require('express')
const app = express()
let visits = 0
let color = ''

app.get('/', (req, res) => {
  visits += 1
  visits % 3 == 0 ? color = 'red' : color = 'green'
  res.send(`<h1 style="color:${color}">Hello World</h1>`)
})

app.listen(4001, () => {
  console.log("Listening on port: 4001")
})
