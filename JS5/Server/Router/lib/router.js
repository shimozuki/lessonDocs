const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h1>Birds in the trap</h1>')
})

router.get(['/hello', '/world'], (req, res) => {
  res.send('<h1>Hello World</h1>')
})

router.get('/about', (req, res) => {
  res.send('About that life!')
})

module.exports = router
