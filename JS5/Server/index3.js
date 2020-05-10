const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send(`<h1>Hello World</h1>`)
})

app.delete('/hello', (req, res) => {
  res.send("ok")
})

app.listen(3000)
