"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Todo = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Todo = /*#__PURE__*/function () {
  function Todo(title, description, dueDate, priority, notes) {
    _classCallCheck(this, Todo);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }

  _createClass(Todo, [{
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(value) {
      this._title = value;
    }
  }, {
    key: "description",
    get: function get() {
      return this._description;
    },
    set: function set(value) {
      this._description = value;
    }
  }, {
    key: "dueDate",
    get: function get() {
      return this._dueDate;
    },
    set: function set(value) {
      this._dueDate = value;
    }
  }, {
    key: "priority",
    get: function get() {
      return this._priority;
    },
    set: function set(value) {
      this._priority = value;
    }
  }, {
    key: "notes",
    get: function get() {
      return this._notes;
    },
    set: function set(value) {
      this._notes = value;
    }
  }]);

  return Todo;
}();

exports.Todo = Todo;