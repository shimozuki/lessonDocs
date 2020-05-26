const express = require('express')
const fs = require('fs')
const https = require('https')
const app = express() 


const server = https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)

server.listen(443, () => {
  console.log("Example app listening on port 3000! Go to https://localhost:3000/")
})
