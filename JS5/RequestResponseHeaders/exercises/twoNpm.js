const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api/*', (req, res) => {
  res.json({msg: 'This is a CORS-enabled for all origins!'})
})

app.listen(2001, () => {
  console.log("CORS Listening on port: 2001")
})
