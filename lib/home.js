"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHome = createHome;

var _project = require("./project");

var _delete = require("./delete");

var _todoPage = require("./todoPage");

function createHome(projectList) {
  localStorage.setItem('list', JSON.stringify(projectList));
  (0, _delete.deleteElements)();
  var body = document.querySelector('body');

  var _loop = function _loop(i) {
    var div = makeProjectDiv(projectList[i]);
    div.dataset.index = i;
    var deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = "Complete/Delete Project";
    deleteProjectButton.addEventListener('click', function (event) {
      event.preventDefault();

      if (projectList.length == 1) {
        projectList = [];
      } else {
        projectList.splice(div.dataset.index, 1);
      }

      createHome(projectList);
    });
    var todosButton = document.createElement('button');
    todosButton.textContent = 'View Todos';
    todosButton.addEventListener('click', function () {
      (0, _todoPage.createTodoPage)(projectList, projectList[i]);
    });
    div.appendChild(deleteProjectButton);
    div.appendChild(todosButton);
    body.appendChild(div);
  };

  for (var i = 0; i < projectList.length; i++) {
    _loop(i);
  }

  var button = createAddButton(projectList);
  body.appendChild(button);
}

function makeProjectDiv(project) {
  var div = document.createElement('div');
  div.className = 'project';
  var title = document.createElement('h1');
  title.textContent = project.title;
  div.appendChild(title);
  return div;
}

function createAddButton(projectList) {
  var button = document.createElement('button');
  button.textContent = 'Add Project';
  button.id = 'addP';
  button.addEventListener('click', function () {
    createForm(projectList);
  });
  return button;
}

function createForm(projectList) {
  (0, _delete.deleteProjectButtons)();
  var body = document.querySelector('body');
  var form = document.createElement('form');
  form.className = 'form';
  var titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title';
  var br1 = document.createElement('br');
  var titleInput = document.createElement('input');
  titleInput.className = 'input';
  var br2 = document.createElement('br');
  var submit = document.createElement('button');
  submit.textContent = 'Submit';
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    projectList.push(new _project.Project([], titleInput.value));
    createHome(projectList);
  });
  form.appendChild(titleLabel);
  form.appendChild(br1);
  form.appendChild(titleInput);
  form.appendChild(br2);
  form.appendChild(submit);
  body.appendChild(form);
}