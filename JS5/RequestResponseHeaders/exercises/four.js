const express = require('express')
const app = express()
let visitorId = 0

app.get('/ab', (req, res) => {
  const cookie = req.get('cookie') || ''
  const cookieStr = cookie.split(';').find(str => {
    return str.includes('abtest=')
  }) || ''

  let visitorKey = cookieStr.split('=')[1]
  if (!visitorKey) {
    visitorKey = visitorId
    visitorId = visitorId + 1
  }
  let color = 'blue'
  if (+visitorKey % 3 === 0) {
     color = 'green'
  }
  res.set('set-cookie', `abtest=${visitorKey}`)
  res.send(`
  <style>
  h1 {
   color: ${color}
  }
  </style>
  <h1>Hello World</h1>
    `)
})

app.listen(4011, () => {
  console.log("Listening on port: 4011")
})
