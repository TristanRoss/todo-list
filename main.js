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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.deleteElements = deleteElements;\n\nfunction deleteElements() {\n  var body = document.querySelector('body');\n\n  while (body.firstChild) {\n    body.removeChild(body.firstChild);\n  }\n}\n\n//# sourceURL=webpack:///./lib/delete.js?");

/***/ }),

/***/ "./lib/home.js":
/*!*********************!*\
  !*** ./lib/home.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createHome = createHome;\n\nvar _project = __webpack_require__(/*! ./project */ \"./lib/project.js\");\n\nvar _todo = __webpack_require__(/*! ./todo */ \"./lib/todo.js\");\n\nvar _delete = __webpack_require__(/*! ./delete */ \"./lib/delete.js\");\n\nvar _todoPage = __webpack_require__(/*! ./todoPage */ \"./lib/todoPage.js\");\n\nfunction createHome() {\n  var div = document.createElement('div');\n  div.className = \"project\";\n  var project = new _project.Project([], \"Project 1\");\n  project.add(new _todo.Todo('blah title', 'blah', 'blah', 'blah', 'blah'));\n  div.textContent = project.title;\n  div.addEventListener('click', function () {\n    (0, _todoPage.createTodoPage)(project);\n  });\n  var body = document.querySelector('body');\n  body.append(div);\n}\n\n//# sourceURL=webpack:///./lib/home.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _delete = __webpack_require__(/*! ./delete */ \"./lib/delete.js\");\n\nvar _todo = __webpack_require__(/*! ./todo */ \"./lib/todo.js\");\n\nvar _home = __webpack_require__(/*! ./home */ \"./lib/home.js\");\n\nvar todo = new _todo.Todo('test');\nconsole.log(todo.title);\ntodo.title = 'test2';\nconsole.log(todo.title);\n(0, _home.createHome)();\n\n//# sourceURL=webpack:///./lib/index.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createTodoPage = createTodoPage;\n\nvar _project = __webpack_require__(/*! ./project */ \"./lib/project.js\");\n\nvar _delete = __webpack_require__(/*! ./delete */ \"./lib/delete.js\");\n\nfunction createTodoPage(project) {\n  (0, _delete.deleteElements)();\n  var body = document.querySelector('body');\n\n  for (var i = 0; i < project.todos.length; i++) {\n    var div = document.createElement('div');\n    div.className = \"todo\";\n    var todo = project.todos[i];\n    div.textContent = todo.title;\n    body.appendChild(div);\n  }\n}\n\n//# sourceURL=webpack:///./lib/todoPage.js?");

/***/ })

/******/ });