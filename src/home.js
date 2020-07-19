import { Project } from './project';
import { Todo } from './todo';
function createHome() {
    const div = document.createElement('div');
    let project = new Project([]);
    project.add(new Todo('blah', 'blah', 'blah', 'blah', 'blah'));
    div.textContent = project.todos[0].title;
    const body = document.querySelector('body');
    body.append(div);
}

export {
    createHome
}