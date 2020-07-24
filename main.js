/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/delete.js":
/*!***********************!*\
  !*** ./lib/delete.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.deleteElements = deleteElements;\nexports.deleteTodoButtons = deleteTodoButtons;\nexports.deleteProjectButtons = deleteProjectButtons;\n\nfunction deleteElements() {\n  var body = document.querySelector('body');\n\n  while (body.firstChild) {\n    body.removeChild(body.firstChild);\n  }\n}\n\nfunction deleteTodoButtons() {\n  var body = document.querySelector('body');\n  var button = document.querySelector('#add');\n  var allProjectsButton = document.querySelector('#all');\n  body.removeChild(button);\n  body.removeChild(allProjectsButton);\n}\n\nfunction deleteProjectButtons() {\n  var body = document.querySelector('body');\n  var button = document.querySelector('#addP');\n  body.removeChild(button);\n}\n\n//# sourceURL=webpack:///./lib/delete.js?");

/***/ }),

/***/ "./lib/home.js":
/*!*********************!*\
  !*** ./lib/home.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createHome = createHome;\n\nvar _project = __webpack_require__(/*! ./project */ \"./lib/project.js\");\n\nvar _delete = __webpack_require__(/*! ./delete */ \"./lib/delete.js\");\n\nvar _todoPage = __webpack_require__(/*! ./todoPage */ \"./lib/todoPage.js\");\n\nfunction createHome(projectList) {\n  (0, _delete.deleteElements)();\n  var body = document.querySelector('body');\n\n  var _loop = function _loop(i) {\n    var div = makeProjectDiv(projectList[i]);\n    div.dataset.index = i;\n    var deleteProjectButton = document.createElement('button');\n    deleteProjectButton.textContent = \"Complete/Delete Project\";\n    deleteProjectButton.addEventListener('click', function (event) {\n      event.preventDefault();\n\n      if (projectList.length == 1) {\n        projectList = [];\n      } else {\n        projectList.splice(div.dataset.index, 1);\n      }\n\n      createHome(projectList);\n    });\n    var todosButton = document.createElement('button');\n    todosButton.textContent = 'View Todos';\n    todosButton.addEventListener('click', function () {\n      (0, _todoPage.createTodoPage)(projectList, projectList[i]);\n    });\n    div.appendChild(deleteProjectButton);\n    div.appendChild(todosButton);\n    body.appendChild(div);\n  };\n\n  for (var i = 0; i < projectList.length; i++) {\n    _loop(i);\n  }\n\n  var button = createAddButton(projectList);\n  body.appendChild(button);\n}\n\nfunction makeProjectDiv(project) {\n  var div = document.createElement('div');\n  div.className = 'project';\n  var title = document.createElement('h1');\n  title.textContent = project.title;\n  div.appendChild(title);\n  return div;\n}\n\nfunction createAddButton(projectList) {\n  var button = document.createElement('button');\n  button.textContent = 'Add Project';\n  button.id = 'addP';\n  button.addEventListener('click', function () {\n    createForm(projectList);\n  });\n  return button;\n}\n\nfunction createForm(projectList) {\n  (0, _delete.deleteProjectButtons)();\n  var body = document.querySelector('body');\n  var form = document.createElement('form');\n  form.className = 'form';\n  var titleLabel = document.createElement('label');\n  titleLabel.textContent = 'Title';\n  var br1 = document.createElement('br');\n  var titleInput = document.createElement('input');\n  titleInput.className = 'input';\n  var br2 = document.createElement('br');\n  var submit = document.createElement('button');\n  submit.textContent = 'Submit';\n  submit.addEventListener('click', function (event) {\n    event.preventDefault();\n    projectList.push(new _project.Project([], titleInput.value));\n    createHome(projectList);\n  });\n  form.appendChild(titleLabel);\n  form.appendChild(br1);\n  form.appendChild(titleInput);\n  form.appendChild(br2);\n  form.appendChild(submit);\n  body.appendChild(form);\n}\n\n//# sourceURL=webpack:///./lib/home.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _delete = __webpack_require__(/*! ./delete */ \"./lib/delete.js\");\n\nvar _todo = __webpack_require__(/*! ./todo */ \"./lib/todo.js\");\n\nvar _home = __webpack_require__(/*! ./home */ \"./lib/home.js\");\n\nvar projectList = [];\n(0, _home.createHome)(projectList);\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ }),

/***/ "./lib/project.js":
/*!************************!*\
  !*** ./lib/project.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Project = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Project = /*#__PURE__*/function () {\n  function Project(todos, title) {\n    _classCallCheck(this, Project);\n\n    this.todos = todos;\n    this.title = title;\n  }\n\n  _createClass(Project, [{\n    key: \"add\",\n    value: function add(value) {\n      this._todos.push(value);\n    }\n  }, {\n    key: \"todos\",\n    get: function get() {\n      return this._todos;\n    },\n    set: function set(value) {\n      this._todos = value;\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return this._title;\n    },\n    set: function set(value) {\n      this._title = value;\n    }\n  }]);\n\n  return Project;\n}();\n\nexports.Project = Project;\n\n//# sourceURL=webpack:///./lib/project.js?");

/***/ }),

/***/ "./lib/todo.js":
/*!*********************!*\
  !*** ./lib/todo.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Todo = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Todo = /*#__PURE__*/function () {\n  function Todo(title, description, dueDate, priority, notes) {\n    _classCallCheck(this, Todo);\n\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n  }\n\n  _createClass(Todo, [{\n    key: \"title\",\n    get: function get() {\n      return this._title;\n    },\n    set: function set(value) {\n      this._title = value;\n    }\n  }, {\n    key: \"description\",\n    get: function get() {\n      return this._description;\n    },\n    set: function set(value) {\n      this._description = value;\n    }\n  }, {\n    key: \"dueDate\",\n    get: function get() {\n      return this._dueDate;\n    },\n    set: function set(value) {\n      this._dueDate = value;\n    }\n  }, {\n    key: \"priority\",\n    get: function get() {\n      return this._priority;\n    },\n    set: function set(value) {\n      this._priority = value;\n    }\n  }, {\n    key: \"notes\",\n    get: function get() {\n      return this._notes;\n    },\n    set: function set(value) {\n      this._notes = value;\n    }\n  }]);\n\n  return Todo;\n}();\n\nexports.Todo = Todo;\n\n//# sourceURL=webpack:///./lib/todo.js?");

/***/ }),

/***/ "./lib/todoPage.js":
/*!*************************!*\
  !*** ./lib/todoPage.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createTodoPage = createTodoPage;\n\nvar _home = __webpack_require__(/*! ./home */ \"./lib/home.js\");\n\nvar _delete = __webpack_require__(/*! ./delete */ \"./lib/delete.js\");\n\nvar _todo = __webpack_require__(/*! ./todo */ \"./lib/todo.js\");\n\nfunction createTodoPage(projectList, project) {\n  (0, _delete.deleteElements)();\n  console.log(projectList);\n  var body = document.querySelector('body');\n\n  if (project.todos.length > 0) {\n    project.todos.sort(function (a, b) {\n      return a.priority.localeCompare(b.priority);\n    });\n  }\n\n  var _loop = function _loop(i) {\n    var div = makeTodoDiv(project.todos[i]);\n    div.dataset.index = i;\n    var deleteTodoButton = document.createElement('button');\n    deleteTodoButton.textContent = 'Complete/Delete Todo';\n    deleteTodoButton.addEventListener('click', function (event) {\n      event.preventDefault();\n\n      if (project.todos.length == 1) {\n        project.todos = [];\n      } else {\n        project.todos.splice(div.dataset.index, 1);\n      }\n\n      createTodoPage(projectList, project);\n    });\n    div.appendChild(deleteTodoButton);\n    body.appendChild(div);\n  };\n\n  for (var i = 0; i < project.todos.length; i++) {\n    _loop(i);\n  }\n\n  var button = createAddButton(projectList, project);\n  var allProjectsButton = createAllProjectsButton(projectList);\n  body.appendChild(button);\n  body.appendChild(allProjectsButton);\n}\n\nfunction makeTodoDiv(todo) {\n  var div = document.createElement('div');\n  div.className = 'todo';\n  var title = document.createElement('h2');\n  var description = document.createElement('p');\n  var dueDate = document.createElement('p');\n  var priority = document.createElement('p');\n  var notes = document.createElement('p');\n  title.textContent = todo.title;\n  description.textContent = todo.description;\n  dueDate.textContent = todo.dueDate;\n  priority.textContent = todo.priority;\n  notes.textContent = todo.notes;\n  div.appendChild(title);\n  div.appendChild(description);\n  div.appendChild(dueDate);\n  div.appendChild(priority);\n  div.appendChild(notes);\n  return div;\n}\n\nfunction createAllProjectsButton(projectList) {\n  var button = document.createElement('button');\n  button.textContent = 'All Projects';\n  button.id = 'all';\n  button.addEventListener('click', function () {\n    (0, _delete.deleteElements)();\n    (0, _home.createHome)(projectList);\n  });\n  return button;\n}\n\nfunction createAddButton(projectList, project) {\n  var button = document.createElement('button');\n  button.textContent = 'Add Todo';\n  button.id = 'add';\n  button.addEventListener('click', function () {\n    createForm(projectList, project);\n  });\n  return button;\n}\n\nfunction createForm(projectList, project) {\n  (0, _delete.deleteTodoButtons)();\n  var body = document.querySelector('body');\n  var form = document.createElement('form');\n  form.className = 'form';\n  var titleLabel = document.createElement('label');\n  titleLabel.textContent = 'Title';\n  var br1 = document.createElement('br');\n  var titleInput = document.createElement('input');\n  titleInput.className = 'input';\n  var br2 = document.createElement('br');\n  var descriptionLabel = document.createElement('label');\n  descriptionLabel.textContent = 'Description';\n  var br3 = document.createElement('br');\n  var descriptionInput = document.createElement('input');\n  descriptionInput.className = 'input';\n  var br4 = document.createElement('br');\n  var dueDateLabel = document.createElement('label');\n  dueDateLabel.textContent = 'Due Date';\n  var br5 = document.createElement('br');\n  var dueDateInput = document.createElement('input');\n  dueDateInput.className = 'input';\n  var br6 = document.createElement('br');\n  var priorityLabel = document.createElement('label');\n  priorityLabel.textContent = 'Priority';\n  var br7 = document.createElement('br');\n  var priorityInput = document.createElement('input');\n  priorityInput.className = 'input';\n  var br8 = document.createElement('br');\n  var notesLabel = document.createElement('label');\n  notesLabel.textContent = 'Notes';\n  var br9 = document.createElement('br');\n  var notesInput = document.createElement('input');\n  notesInput.className = 'input';\n  var br10 = document.createElement('br');\n  var submit = document.createElement('button');\n  submit.textContent = 'Submit';\n  submit.addEventListener('click', function (event) {\n    event.preventDefault();\n    project.todos.push(new _todo.Todo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value));\n    createTodoPage(projectList, project);\n  });\n  form.appendChild(titleLabel);\n  form.appendChild(br1);\n  form.appendChild(titleInput);\n  form.appendChild(br2);\n  form.appendChild(descriptionLabel);\n  form.appendChild(br3);\n  form.appendChild(descriptionInput);\n  form.appendChild(br4);\n  form.appendChild(dueDateLabel);\n  form.appendChild(br5);\n  form.appendChild(dueDateInput);\n  form.appendChild(br6);\n  form.appendChild(priorityLabel);\n  form.appendChild(br7);\n  form.appendChild(priorityInput);\n  form.appendChild(br8);\n  form.appendChild(notesLabel);\n  form.appendChild(br9);\n  form.appendChild(notesInput);\n  form.appendChild(br10);\n  form.appendChild(submit);\n  body.appendChild(form);\n}\n\n//# sourceURL=webpack:///./lib/todoPage.js?");

/***/ })

/******/ });