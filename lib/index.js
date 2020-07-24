"use strict";

var _delete = require("./delete");

var _todo = require("./todo");

var _home = require("./home");

var projectList = [];
console.log(JSON.parse(localStorage.getItem('list')));

if (localStorage.getItem('list')) {
  projectList = JSON.parse(localStorage.getItem('list'));
}

(0, _home.createHome)(projectList);