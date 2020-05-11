const express = require('express')
const app = express()

app.get('/', (req, res) => {
  // sets the cookie header in the response to hello
  // res.set('set-cookie', 'hello')
  
  res.set({
    'set-cookie': 'hello',
    'cache-control': 'max-age=120'
  })

  res.send('<h1>Geto Boys Still</h1>')
})

app.get('/api', (req, res) => {
  res.json([{
    title: 'lesson1',
  }, {
    title: 'lesson2'
  }, {
    bestOf: 'Geto Boyz'
  }])
})

app.listen(9347, () => {
  console.log("listening on port: 9347")
})
