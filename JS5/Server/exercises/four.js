const express = require('express')
const app = express()

let color = ''
let count = 0

app.get('/abtest', (req, res) => {
  count += 1
  count % 5 === 0 ? color = 'blue' : color = 'green';
  console.log(count, 'count', color, 'color')
    res.send(`
  <h1>Nice</h1>
  <h1 style="color:${color}">Hello World</h1>
  `)
})

app.listen(4000, () => {
  console.log("Listening on port: 4000")
})
