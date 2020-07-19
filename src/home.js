import { Project } from './project';
import { Todo } from './todo';
import { deleteElements } from './delete';
import { createTodoPage } from './todoPage';
function createHome() {
    const div = document.createElement('div');
    div.className = "project";
    let project = new Project([], "Project 1");
    project.add(new Todo('blah title', 'blah', 'blah', 'blah', 'blah'));
    div.textContent = project.title;
    div.addEventListener('click', () => {
        createTodoPage(project);
    });
    const body = document.querySelector('body');
    body.append(div);
}

export {
    createHome
}