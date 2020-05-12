const express = require('express')
const app = express()

app.get('/profile', (req, res, next) => {
  if (!req.get('cookie')) {
    return res.status(401).send('You are not authorized')
  }
  next()
}, (req, res) => {
  const username = req.get('cookie')
  res.send(`<h1> Welcome ${username}!</h1>`)
})

app.listen(8623, () => {
  console.log('Listening on port: 8623')
})
