import { Project } from './project';
import { deleteElements } from './delete';
function createTodoPage(project) {
    deleteElements();
    const body = document.querySelector('body');
    for (let i = 0; i < project.todos.length; i++) {
        const div = makeTodoDiv(project.todos[i]);
        body.appendChild(div);
    }
}

function makeTodoDiv(todo) {
    const div = document.createElement('div');
    div.className = "todo";
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
    const notes = document.createElement('p');
    title.textContent = todo.title;
    description.textContent = todo.description;
    dueDate.textContent = todo.description;
    priority.textContent = todo.priority;
    notes.textContent = todo.notes;
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(dueDate);
    div.appendChild(priority);
    div.appendChild(notes);
    return div;
}

export {
    createTodoPage
}