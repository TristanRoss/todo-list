import { deleteElements } from './delete';
import { Todo } from './todo';
import { createHome } from './home';

let todo = new Todo('test');
console.log(todo.title);
todo.title = 'test2';
console.log(todo.title);
createHome();