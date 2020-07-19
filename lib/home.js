"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHome = createHome;

var _project = require("./project");

var _todo = require("./todo");

function createHome() {
  var div = document.createElement('div');
  var project = new _project.Project([]);
  project.add(new _todo.Todo('blah', 'blah', 'blah', 'blah', 'blah'));
  div.textContent = project.todos[0].title;
  var body = document.querySelector('body');
  body.append(div);
}