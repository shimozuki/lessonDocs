const express = require('express')
const app = express()
let count = 0

app.get('/', (req, res, next) => {
  req.user = {
    id: count
  }
  count += 1
  next()
})

app.get('/', (req, res) => {
  res.send(`<h1> You are visitor number ${req.user.id}!</h1>`)
})

app.listen(3854, () => {
  console.log('Listening on port: 3854')
})
