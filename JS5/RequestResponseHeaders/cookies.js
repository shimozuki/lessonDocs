const express = require('express')
const app = express()
let id = 0

app.get('/set', (req, res) => {
  id += 1
  res.set({
    'set-cookie': `id=${id}`,
  })
  res.send("<h1>Cookie has been set</h1>")
})

app.get('/', (req, res) => {
  res.send(`
  <h1>Welcome ${req.get('cookie')}</h1>
    `)
})

app.listen(4567, () => {
  console.log("Listening on port: 4567")
})
