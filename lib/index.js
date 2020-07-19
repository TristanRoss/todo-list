"use strict";

var _delete = require("./delete");

var _todo = require("./todo");

var _home = require("./home");

var todo = new _todo.Todo('test');
console.log(todo.title);
todo.title = 'test2';
console.log(todo.title);
(0, _home.createHome)();