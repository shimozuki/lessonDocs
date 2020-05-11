const express = require("express")
const app = express()

app.get('/users/:username/profile/:age', (req, res) => {
  const userId = req.params.username
  console.log(userId, 'id', req.params, 'req')
  res.send(`<h1>Welcome ${userId}, Your are a ${req.params.age}</h1>`)
})

app.listen(4098, () => {
  console.log("Listening on port: 4098")
})
