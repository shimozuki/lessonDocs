const express = require('express')
const app = express()

app.get('/delay', (req, res) => {
  setTimeout(() => {
    res.send(`<h1>Welcome! You waited ${req.query.time} ms</h1>`)
  }, req.query.time)
})

app.listen(1003, () => {
  console.log("Listening on port: 1003")
})
