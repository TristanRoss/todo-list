"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteElements = deleteElements;

function deleteElements() {
  var body = document.querySelector('body');

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}