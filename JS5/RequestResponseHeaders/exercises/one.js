const express = require('express')
const app = express()

const browserHTML = (browser = 'Unknown') => {
  let color = ''
  if (browser === 'firefox') {
    color = 'blue'
  }
  if (browser === 'chrome') {
    color = 'green'
  }
  if (browser === 'safari') {
    color = 'red'
  }

  return `
  <style>
  h1 {
  color: ${color};
  }
  </style>
  <h1>Welcome ${browser} user </h1>
  `
}

app.get('/', (req, res) => {
  const ua = req.get('user-agent').toLowerCase()
  console.log(ua, 'ua')
  if (ua.includes('firefox/')) {
    return res.send(browserHTML('firefox'))
  }
  if (ua.includes('chrome/')) {
    return res.send(browserHTML('chrome'))
  }
  if (ua.includes('safari/')) {
    return res.send(browserHTML('safari'))
  }
  return res.send(browserHTML())
})

app.listen(1001, () => {
  console.log("Listening on port: 1001")
})
