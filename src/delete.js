function deleteElements() {
    const body = document.querySelector('body');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}

export {
    deleteElements,
}