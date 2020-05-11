const express = require('express')
const {v4:uuidv4} = require('uuid')
const app = express()
let uniqueVisitors = 0

app.get('/distinct', (req, res) => {
  const cookie = req.get('cookie') || ''
  const cookieStr = cookie.split(';').find(str => {
    return str.includes('gui')
  }) || ''

  let guid = cookieStr.split('=')[1]
  if (cookieStr) {
    return res.send(`
    <h1>You have been identified with guid${guid}</h1>
    <h3>Distinct Number of Visitor Count: ${uniqueVisitors}</h3>
      `)
  }

  uniqueVisitors += 1
  guid = uuidv4()

  res.set('set-cookie', `guid=${guid}`)
  res.send(`
  <h1>You have been ASSINGED a guid ${guid}</h1>
  <h3>Distinct Number of Visitor Count: ${uniqueVisitors}.</h3>
    `)
})

app.listen(3001, () => {
  console.log("Listening on port: 3001")
})
