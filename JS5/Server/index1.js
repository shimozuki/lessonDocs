const express = require('express')
const app = express()
const port = 4000 

app.get('/', (req, res) => {
  res.send(`
  <h1 style="text-align:center;">Sade is my Nigerian Waifu</h1>
  <h2 style="color:blue;text-align:center;">SuperVillian</h2>
    `)
})

app.listen(port, () => {
  console.log(`Listening on port: `, port)
})
