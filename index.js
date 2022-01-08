
const todoList = [];

function addTodo() {
    const inputTextElem = document.getElementById('input-text');
    const inputText = inputTextElem.value;
    if (!inputText) {
        return;
    }
    todoList.push(inputText);
    updateTodoList();
    inputTextElem.value = '';
}

function updateTodoList() {
    const todoListElem = document.getElementById('todo-list');
    todoListElem.innerHTML = '';

    todoList.forEach(todo => {
        const newListElem = document.createElement('li');
    newListElem.innerHTML = todo;

    todoListElem.appendChild(newListElem);
    });
}