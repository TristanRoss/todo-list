"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTodoPage = createTodoPage;

var _project = require("./project");

var _delete = require("./delete");

function createTodoPage(project) {
  (0, _delete.deleteElements)();
  var body = document.querySelector('body');

  for (var i = 0; i < project.todos.length; i++) {
    var div = makeTodoDiv(project.todos[i]);
    body.appendChild(div);
  }
}

function makeTodoDiv(todo) {
  var div = document.createElement('div');
  div.className = "todo";
  var title = document.createElement('h2');
  var description = document.createElement('p');
  var dueDate = document.createElement('p');
  var priority = document.createElement('p');
  var notes = document.createElement('p');
  title.textContent = todo.title;
  description.textContent = todo.description;
  dueDate.textContent = todo.description;
  priority.textContent = todo.priority;
  notes.textContent = todo.notes;
  div.appendChild(title);
  div.appendChild(description);
  div.appendChild(dueDate);
  div.appendChild(priority);
  div.appendChild(notes);
  return div;
}