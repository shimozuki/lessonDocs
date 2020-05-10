const express = require('express')
const app = express()
let count = 0

app.get('/count', async (req, res) => {
  count += 1
  res.send(`
    <h1 style="text-align:center;">You have visited ${count} times!</h1>
    <script>
    console.log('Keep that shit over there!')
    </script>
    `)
})

app.listen(1000, () => {
  console.log('Listening on port 1000')
})
