const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
  <h1>The Scotts</h1>
  `)
})

app.get('/todos', (req, res) => {
  res.json({
    "1": "Buy Milk",
    "2": "Go to store",
    "3": "Buy cheese"
  })
})

app.listen(1003, () => {
  console.log("Listening on port: 1003")
})
