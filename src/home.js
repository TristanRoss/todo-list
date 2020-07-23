import { Project } from './project';
import { Todo } from './todo';
import { deleteElements } from './delete';
import { createTodoPage } from './todoPage';
function createHome() {
    const div = document.createElement('div');
    div.className = "project";
    let project = new Project([], "Project 1");
    project.add(new Todo('Grocery Shopping', 'Get some groceries', 'August 13 2020', '1', 'These some notes'));
    project.add(new Todo('Grocery Shopping 2', 'Get some more groceries', 'August 14 2020', '2', 'These some more notes'));
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