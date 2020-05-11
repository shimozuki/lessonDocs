const express = require('express')
const app = express()

app.options('/api/*', (req, res) => {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'GET', 'PUT', 'POST', 'PATCH', 'DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-request-With, Content-Type, Accpet, Crednetials '
  )
  res.send('ok')
})

app.put('/api/*', (req, res) => {
  res.send('<h1>put request received</h1>')
})

app.post('/api/*', (req, res) => {
  res.send('<h1>put request recieved</h1>')
})

app.get('/api/', (req, res) => {
  res.send('<h1>All clear!</h1>')
})

app.listen(2011, () => {
  console.log('Listening on port: 2011')
})
