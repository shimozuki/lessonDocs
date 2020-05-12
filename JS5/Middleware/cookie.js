const express = require('express')
const app = express()

app.use(session({
  secret: 'Your Encryption String',
  resave: false,
  saveUntilinitialized: true,
  cookie: {secure: true}
}))

app.get('/*', (req, res) => {
  console.log(req.session.name)
  req.session.name = 'hello'
})

app.listen(3854, () => {
  console.log('Listening on port: 3854')
})
