const express = require('express')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer({})
const app = express()

app.get('/', (req, res) => {
  res.redirect('/hello')
})

app.get('/hello', (req, res) => {
  proxy.web(req, res, {
    target: 'http://192.168.1.87:3001'
  })
})

app.get('/world', (req, res) => {
  proxy.web(req, res, {
    target: 'http://192.168.1.88:3001'
  })
})

app.listen(8080, () => {
  console.log("Listening on port 8080")
})
