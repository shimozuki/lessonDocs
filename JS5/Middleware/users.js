const express = require('express')
const app = express()

app.use('/api/*', (req, res) => {
  if (!req.get('cookie')) {
    return res.status(401).send('You are not authorized')
  }
  next()
})

app.get('/api/users', (req, res) => {
  const username = req.get('cookie')
  res.send(`<h1> Welcome ${username}</h1>`)
})

app.listen(7294, () => {
  console.log("Listening on port: 7294")
})
