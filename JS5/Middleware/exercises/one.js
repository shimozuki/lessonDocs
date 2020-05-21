const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false})
const todos = [
  "Buy Milk",
  "Go to store",
  "Buy cheese"
]

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/one.html')
})

app.get('/todo', (req, res) => {
  res.json(todos)
})

app.post('/todo', (req, res) => {
  console.log('body', req.body)
  console.log('query', req.query)
  console.log('params', req.params)

  //todos.push(todo)
  res.redirect('/one.html')
})

app.listen(1003, () => {
  console.log("Listening on port: 1003")
})
