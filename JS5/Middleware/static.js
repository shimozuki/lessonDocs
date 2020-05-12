const express = require('express')
const app = express()


app.get('/', (req, res) => {
  const staticFiles = express.static('./public')
  console.log(staticFiles, 'files', 'string')

  app.use(staticFiles)
})

app.listen(3854, () => {
  console.log('Listening on port: 3854')
})
