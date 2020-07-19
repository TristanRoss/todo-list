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
    var div = document.createElement('div');
    div.className = "todo";
    var todo = project.todos[i];
    div.textContent = todo.title;
    body.appendChild(div);
  }
}