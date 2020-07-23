"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteElements = deleteElements;
exports.deleteTodoButtons = deleteTodoButtons;
exports.deleteProjectButtons = deleteProjectButtons;

function deleteElements() {
  var body = document.querySelector('body');

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}

function deleteTodoButtons() {
  var body = document.querySelector('body');
  var button = document.querySelector('#add');
  var allProjectsButton = document.querySelector('#all');
  body.removeChild(button);
  body.removeChild(allProjectsButton);
}

function deleteProjectButtons() {
  var body = document.querySelector('body');
  var button = document.querySelector('#addP');
  body.removeChild(button);
}