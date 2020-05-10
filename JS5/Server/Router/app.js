const express = require('express')
const app = express()
const router = require('./lib/router.js')

app.use('/', router)

app.listen(1234, () => {
  console.log('Listening on port: 1234')
})
