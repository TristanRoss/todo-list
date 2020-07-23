function deleteElements() {
    const body = document.querySelector('body');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}

function deleteTodoButtons() {
    const body = document.querySelector('body');
    const button = document.querySelector('#add');
    const allProjectsButton = document.querySelector('#all');
    body.removeChild(button);
    body.removeChild(allProjectsButton);
}

function deleteProjectButtons() {
    const body = document.querySelector('body');
    const button = document.querySelector('#addP');
    body.removeChild(button);
}

export {
    deleteElements,
    deleteTodoButtons,
    deleteProjectButtons
}