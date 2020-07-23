import { Project } from './project';
import { deleteElements, deleteProjectButtons } from './delete';
import { createTodoPage } from './todoPage';
function createHome(projectList) {
    deleteElements();
    const body = document.querySelector('body');
    
    for (let i = 0; i < projectList.length; i++) {
        const div = makeProjectDiv(projectList[i]);
        div.dataset.index = i;
        div.textContent = projectList[i].title;
        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.textContent = "Complete/Delete Project";
        deleteProjectButton.addEventListener('click', () => {
            if (projectList.length == 1) {
                projectList = [];
            } else {
                project.todos.splice(div.dataset.index, 1);
            }
            createHome(projectList);
        });

        div.addEventListener('click', () => {
            createTodoPage(projectList, projectList[i]);
        });
        
        div.appendChild(deleteProjectButton);
        body.appendChild(div);
    }
    const button = createAddButton(projectList);
    body.appendChild(button);
}

function makeProjectDiv(project) {
    const div = document.createElement('div');
    div.className = 'project';
    const title = document.createElement('h1');
    title.textContent = project.title;
    div.appendChild(title);
    return div;
}

function createAddButton(projectList) {
    const button = document.createElement('button');
    button.textContent = 'Add Project';
    button.id = 'addP';
    button.addEventListener('click', () => {
        createForm(projectList);
    });
    return button;
}

function createForm(projectList) {
    deleteProjectButtons();
    const body = document.querySelector('body');
    const form = document.createElement('form');
    form.className = 'form';

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    const br1 = document.createElement('br');
    const titleInput = document.createElement('input');
    titleInput.className = 'input';
    const br2 = document.createElement('br');

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
        projectList.push(new Project([], titleInput.value));
        createHome(projectList);
    });
    
    form.appendChild(titleLabel);
    form.appendChild(br1);
    form.appendChild(titleInput);
    form.appendChild(br2);
    form.appendChild(submit);
    body.appendChild(form);
}

export {
    createHome
}