const express = require('express')
const app = express()

app.get('/delay', async (req, res) => {
  setTimeout(() => {
    res.send(`
    <h1>I am Malcolm X!</h1>
    `)
  }, 5000)
})

app.listen(2000, () => {
  console.log(`Listening on port 2000`)
})

