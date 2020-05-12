const express = require('express')
const app = express()

app.use(express.static('public'))

const multer = require('multer')
const upload = multer({dest: 'uploads/'})

app.post('/files', upload.array('keyname'))

app.get('/', (req, res) => {
  res.send('<h1>Very Cool</h1>')
})

app.listen(8252, () => {
  console.log('Listening on port: 8252')
})

