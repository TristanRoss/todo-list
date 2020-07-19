export class Project {
    constructor(todos, title) {
        this.todos = todos;
        this.title = title;
    }

    get todos() {
        return this._todos;
    }

    set todos(value) {
        this._todos = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    add(value) {
        this._todos.push(value);
    }


}

