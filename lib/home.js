"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHome = createHome;

var _project = require("./project");

var _todo = require("./todo");

var _delete = require("./delete");

var _todoPage = require("./todoPage");

function createHome() {
  var div = document.createElement('div');
  div.className = "project";
  var project = new _project.Project([], "Project 1");
  project.add(new _todo.Todo('blah title', 'blah', 'blah', 'blah', 'blah'));
  div.textContent = project.title;
  div.addEventListener('click', function () {
    (0, _todoPage.createTodoPage)(project);
  });
  var body = document.querySelector('body');
  body.append(div);
}