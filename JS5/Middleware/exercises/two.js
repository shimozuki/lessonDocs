const express = require('express')
const app = express()
const fs = require('fs')
const images = []

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
    <h1>Nice</h1>
  `)
})

app.post('/', (req, res) => {
  fs.writeFile('/', req.body.img, 'base64', (err) => {
    if (err) throw err
    
  })
})

app.listen(4587, () => {
  console.log("Listening on port: 4587")
})
