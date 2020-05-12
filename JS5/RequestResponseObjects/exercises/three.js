const express = require('express');
const app = express();
const lastseen = {};

app.get('/online', (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res
      .status(401)
      .send(
        'Please set a query params with name as the key and your name as the value',
      );
  }
  lastseen[name] = Date.now();
  res.send(`
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/andybrewer/mvp.css" />
<main>
<h1>Welcome ${name}</h1>
<p>Open this page in another tab, use a different name!</p>
<div class="container"></div>
</main>
<script>
cosnt container = document.querySelector('.container')
const render = (data) => {
console.log('data is', data)
const otherUserString = data.reduce((acc, name) => {
return acc + '<h1>' + name + '</h1>'
}, '')
if (otherUserString) {
constiner.innerHTML = '<h2>Other Users</h2>' + otherUserString
}
}

const getData = () => {
fetch('./users?name=${name}').then(r => r.json()).then(data => {
console.log('data is', data)
render(data)
setTimeout(() => {
getData()
}, 1000)
})
}
getData()
</script>
  `);
});

app.get('/users', (req, res) => {
  const authorName = req.query.name;
  const now = Date.now();
  lastseen[authorName] = now;
  Object.keys(lastseen).forEach(name => {
    if (lastseen[name] < now - 1000 * 10) {
      delete lastseen[name];
    }
  });
  const online = Object.keys(lastseen).filter(name => {
    return name !== authorName;
  });
  res.json(online);
});
app.listen(3002, () => {
  console.log('Listening on port: 3002');
});
