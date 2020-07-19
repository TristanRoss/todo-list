export class Project {
    constructor(todos) {
        this.todos = todos;
    }

    get todos() {
        return this._todos;
    }

    set todos(value) {
        this._todos = value;
    }

    add(value) {
        this._todos.push(value);
    }
    
}

