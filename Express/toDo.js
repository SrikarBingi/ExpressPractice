const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    res.status(404).send("File not found");
  } else {
    res.json(todo);
  }
});

app.post("/todos", (req, res) => {
  const newToDo = {
    id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    description: req.body.description,
  };
  todos.push(newToDo);
  res.status(201).json(newToDo);
});

app.put("/todos/:id", (req, res) => {
  const todoidx = todos.find((t) => t.id === parseInt(req.params.id));
  if (todoidx === -1) {
    res.status(404).send();
  }
  todos[todoidx].title = req.body.title;
  todos[todoidx].description = req.body.description;
  res.json(todos[todoidx]);
});

app.delete("/todos/:id", (req, res) => {
  const todoidx = todos.find((t) => t.id === parseInt(req.params.id));
  if (todoidx === -1) {
    res.status(404).send();
  }
  todos.splice(todoidx, 1);
  res.status(200).send();
});

app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(3004);
module.exports = app;
