const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Create a new todo
app.post('/todos', (req, res) => {
  const { title, description } = req.body;
  const newTodo = { title, description };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  todos[id] = { title, description };
  res.json(todos[id]);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedTodo = todos.splice(id, 1);
  res.json(deletedTodo);
});

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});