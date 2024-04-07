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

// Technical Test : Find longest common prefix
app.post('/findcommon', (req, res) => {
  const { strs } = req.body;

  function longestCommonPrefix(strs) {
    const size = strs.length;

    //Constraints * 1 <= strs.length <= 200
    if (size < 1 || size > 200) return "Number of strings must be between 1 and 200.";

    //Constraints * 0 <= strs[i].length <= 200
    for (let i = 0; i < size; i++) {
      if (strs[i].length <= 0 || strs[i].length > 200) {
        return `Length of string at index ${i} must be between 0 and 200.`;
      }

      //Constraints * strs[i] consists of only lower-case English letters.
      if (strs[i].toLowerCase() !== strs[i]) {
        return `String at index ${i} must consist of only lowercase characters.`;
      }
    }
    
    for (let i = 0; i < size; i++) {
      if (strs[i].length <= 0 || strs[i].length > 200) {
        return `Length of string at index ${i} must be between 0 and 200.`;
      }
    }

    if (size === 1) return strs[0];

    strs.sort();
    // if need to sort and tolowercase 
    //strs.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    //console.log(strs);

    const end = Math.min(strs[0].length, strs[size - 1].length);

    let i = 0;
    while (i < end && strs[0][i].toLowerCase() === strs[size - 1][i].toLowerCase()) 
      i++;
    
    return strs[0].substring(0, i);
  }

  const result = longestCommonPrefix(strs).toLowerCase();
  res.status(200).json({ commonPrefix: result });
});

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});