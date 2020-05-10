const express = require('express')
const app = express()

app.get(['/hello', '/world', '/pokemon'], (req, res) => {
  res.send(`<h1>Hello World</h1>`)
})

app.post('/hello', (req, res) => {
  res.send(`<h1>Hello, is it me you're looking for?</h1>`)
})

app.delete('/hello', (req, res) => {
  res.send("ok")
})

app.listen(3000, () => {
  console.log('Listening on port: 3000')
})
