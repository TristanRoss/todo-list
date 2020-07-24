"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTodoPage = createTodoPage;

var _home = require("./home");

var _delete = require("./delete");

var _todo = require("./todo");

function createTodoPage(projectList, project) {
  (0, _delete.deleteElements)();
  console.log(projectList);
  var body = document.querySelector('body');

  if (project.todos.length > 0) {
    project.todos.sort(function (a, b) {
      return a.priority.localeCompare(b.priority);
    });
  }

  var _loop = function _loop(i) {
    var div = makeTodoDiv(project.todos[i]);
    div.dataset.index = i;
    var deleteTodoButton = document.createElement('button');
    deleteTodoButton.textContent = 'Complete/Delete Todo';
    deleteTodoButton.addEventListener('click', function () {
      if (project.todos.length == 1) {
        project.todos = [];
      } else {
        project.todos.splice(div.dataset.index, 1);
      }

      createTodoPage(projectList, project);
    });
    div.appendChild(deleteTodoButton);
    body.appendChild(div);
  };

  for (var i = 0; i < project.todos.length; i++) {
    _loop(i);
  }

  var button = createAddButton(projectList, project);
  var allProjectsButton = createAllProjectsButton(projectList);
  body.appendChild(button);
  body.appendChild(allProjectsButton);
}

function makeTodoDiv(todo) {
  var div = document.createElement('div');
  div.className = 'todo';
  var title = document.createElement('h2');
  var description = document.createElement('p');
  var dueDate = document.createElement('p');
  var priority = document.createElement('p');
  var notes = document.createElement('p');
  title.textContent = todo.title;
  description.textContent = todo.description;
  dueDate.textContent = todo.dueDate;
  priority.textContent = todo.priority;
  notes.textContent = todo.notes;
  div.appendChild(title);
  div.appendChild(description);
  div.appendChild(dueDate);
  div.appendChild(priority);
  div.appendChild(notes);
  return div;
}

function createAllProjectsButton(projectList) {
  var button = document.createElement('button');
  button.textContent = 'All Projects';
  button.id = 'all';
  button.addEventListener('click', function () {
    (0, _delete.deleteElements)();
    (0, _home.createHome)(projectList);
  });
  return button;
}

function createAddButton(projectList, project) {
  var button = document.createElement('button');
  button.textContent = 'Add Todo';
  button.id = 'add';
  button.addEventListener('click', function () {
    createForm(projectList, project);
  });
  return button;
}

function createForm(projectList, project) {
  (0, _delete.deleteTodoButtons)();
  var body = document.querySelector('body');
  var form = document.createElement('form');
  form.className = 'form';
  var titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title';
  var br1 = document.createElement('br');
  var titleInput = document.createElement('input');
  titleInput.className = 'input';
  var br2 = document.createElement('br');
  var descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description';
  var br3 = document.createElement('br');
  var descriptionInput = document.createElement('input');
  descriptionInput.className = 'input';
  var br4 = document.createElement('br');
  var dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date';
  var br5 = document.createElement('br');
  var dueDateInput = document.createElement('input');
  dueDateInput.className = 'input';
  var br6 = document.createElement('br');
  var priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority';
  var br7 = document.createElement('br');
  var priorityInput = document.createElement('input');
  priorityInput.className = 'input';
  var br8 = document.createElement('br');
  var notesLabel = document.createElement('label');
  notesLabel.textContent = 'Notes';
  var br9 = document.createElement('br');
  var notesInput = document.createElement('input');
  notesInput.className = 'input';
  var br10 = document.createElement('br');
  var submit = document.createElement('button');
  submit.textContent = 'Submit1';
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    project.todos.push(new _todo.Todo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value));
    createTodoPage(projectList, project);
  });
  form.appendChild(titleLabel);
  form.appendChild(br1);
  form.appendChild(titleInput);
  form.appendChild(br2);
  form.appendChild(descriptionLabel);
  form.appendChild(br3);
  form.appendChild(descriptionInput);
  form.appendChild(br4);
  form.appendChild(dueDateLabel);
  form.appendChild(br5);
  form.appendChild(dueDateInput);
  form.appendChild(br6);
  form.appendChild(priorityLabel);
  form.appendChild(br7);
  form.appendChild(priorityInput);
  form.appendChild(br8);
  form.appendChild(notesLabel);
  form.appendChild(br9);
  form.appendChild(notesInput);
  form.appendChild(br10);
  form.appendChild(submit);
  body.appendChild(form);
}