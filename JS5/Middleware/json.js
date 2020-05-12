const express = require('express')
const app = express()

app.use(express.json({limit: '10mb'}))

app.get('/', (req, res) => {
  app.use(staticFiles)
})

app.listen(3854, () => {
  console.log('Listening on port: 3854')
})
