import { Project } from './project';
import { deleteElements } from './delete';
function createTodoPage(project) {
    deleteElements();
    const body = document.querySelector('body');
    for (let i = 0; i < project.todos.length; i++) {
        const div = document.createElement('div');
        div.className = "todo";
        let todo = project.todos[i];
        div.textContent = todo.title;
        body.appendChild(div);
    }
}

export {
    createTodoPage
}