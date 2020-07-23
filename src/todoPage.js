import { createHome } from './home';
import { deleteElements, deleteTodoButtons } from './delete';
import { Todo } from './todo';
function createTodoPage(projectList, project) {
    deleteElements();
    console.log(projectList);
    const body = document.querySelector('body');
    if (project.todos.length > 0) {
        project.todos.sort((a, b) => a.priority.localeCompare(b.priority));
    }
    for (let i = 0; i < project.todos.length; i++) {
        const div = makeTodoDiv(project.todos[i]);
        div.dataset.index = i;
        const deleteTodoButton = document.createElement('button');
        deleteTodoButton.textContent = 'Complete/Delete Todo';
        deleteTodoButton.addEventListener('click', () => {
            if (project.todos.length == 1) {
                project.todos = [];
            } else {
                project.todos.splice(div.dataset.index, 1);
            }
            createTodoPage(projectList, project);
        });
        div.appendChild(deleteTodoButton);
        body.appendChild(div);
    }

    const button = createAddButton(project);
    const allProjectsButton = createAllProjectsButton(projectList);
    body.appendChild(button);
    body.appendChild(allProjectsButton);
}

function makeTodoDiv(todo) {
    const div = document.createElement('div');
    div.className = 'todo';
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
    const notes = document.createElement('p');
    title.textContent = todo.title;
    description.textContent = todo.description;
    dueDate.textContent = todo.dueDate;
    priority.textContent = todo.priority;
    notes.textContent = todo.notes;
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(dueDate);
    div.appendChild(priority);
    div.appendChild(notes);
    return div;
}

function createAllProjectsButton(projectList) {
    const button = document.createElement('button');
    button.textContent = 'All Projects';
    button.id = 'all';
    button.addEventListener('click', () => {
        deleteElements();
        createHome(projectList);
    });
    return button;
}

function createAddButton(projectList, project) {
    const button = document.createElement('button');
    button.textContent = 'Add Todo';
    button.id = 'add';
    button.addEventListener('click', () => {
        createForm(projectList, project);
    });
    return button;
}

function createForm(projectList, project) {
    deleteTodoButtons();
    const body = document.querySelector('body');
    const form = document.createElement('form');
    form.className = 'form';

    
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    const br1 = document.createElement('br');
    const titleInput = document.createElement('input');
    titleInput.className = 'input';
    const br2 = document.createElement('br');
    
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    const br3 = document.createElement('br');
    const descriptionInput = document.createElement('input');
    descriptionInput.className = 'input';
    const br4 = document.createElement('br');

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date';
    const br5 = document.createElement('br');
    const dueDateInput = document.createElement('input');
    dueDateInput.className = 'input';
    const br6 = document.createElement('br');

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    const br7 = document.createElement('br');
    const priorityInput = document.createElement('input');
    priorityInput.className = 'input';
    const br8 = document.createElement('br');

    const notesLabel = document.createElement('label');
    notesLabel.textContent = 'Notes';
    const br9 = document.createElement('br');
    const notesInput = document.createElement('input');
    notesInput.className = 'input';
    const br10 = document.createElement('br');

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
        project.add(new Todo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value));
        createTodoPage(projectList, project);
    });

    form.appendChild(titleLabel);
    form.appendChild(br1);
    form.appendChild(titleInput);
    form.appendChild(br2);
    form.appendChild(descriptionLabel);
    form.appendChild(br3);
    form.appendChild(descriptionInput);
    form.appendChild(br4);
    form.appendChild(dueDateLabel);
    form.appendChild(br5);
    form.appendChild(dueDateInput);
    form.appendChild(br6);
    form.appendChild(priorityLabel);
    form.appendChild(br7);
    form.appendChild(priorityInput);
    form.appendChild(br8);
    form.appendChild(notesLabel);
    form.appendChild(br9);
    form.appendChild(notesInput);
    form.appendChild(br10);
    form.appendChild(submit);
    body.appendChild(form);
}

export {
    createTodoPage
}