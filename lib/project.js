"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Project = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Project = /*#__PURE__*/function () {
  function Project(todos, title) {
    _classCallCheck(this, Project);

    this.todos = todos;
    this.title = title;
  }

  _createClass(Project, [{
    key: "add",
    value: function add(value) {
      this._todos.push(value);
    }
  }, {
    key: "todos",
    get: function get() {
      return this._todos;
    },
    set: function set(value) {
      this._todos = value;
    }
  }, {
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(value) {
      this._title = value;
    }
  }]);

  return Project;
}();

exports.Project = Project;