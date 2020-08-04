const express = require('express');
const app = express();

let todos = ['buy milk', 'buy cheese', 'make more todos'];

app.use('/', express.static('./'))
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/todo.html')
});

app.get('/api/todo', (req, res) => {
  res.json(todos);
});

app.post('/api/todo', (req, res) => {
  const item = req.body.item;
  todos.push(item);
});

app.delete('/api/todo', (req, res) => {
  const item = req.body.item;
  todos = todos.filter(ele => ele !== item)
});

app.listen(4000, () => {
  console.log('listening on port: 4000');
});
