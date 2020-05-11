const express = require("express")
const app = express()

app.get('/ignore', async (req, res) => {
  console.log('ouch', Date.now())
  res.set('Cache-Control', 'max-age=120')
  setTimeout(() => {
    res.send('<h1>Cached page</h1>')
  }, 3000)
})

app.listen(6780, () => {
  console.log("Listening on port: 6780")
})
