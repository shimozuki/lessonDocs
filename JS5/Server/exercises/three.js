const express = require('express');
const app = express();
const fs = require('fs');

app.get('/getfile', async (req, res) => {
  fs.readFile('./hello.html', (err, data) => {
    res.send(`
  <div class="app">${data}</div>
    `);
  });
});

app.listen(3000, () => {
  console.log('Listening on port: 3000');
});
