import { deleteElements } from './delete';
import { Todo } from './todo';
import { createHome } from './home';

let projectList = [];
console.log(JSON.parse(localStorage.getItem('list')));
if (localStorage.getItem('list')) {
    projectList = JSON.parse(localStorage.getItem('list'));
}
createHome(projectList);