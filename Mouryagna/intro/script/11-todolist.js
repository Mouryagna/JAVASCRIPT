const todolist = [];
renderTodoList();
function addTodo() {
    const inputElement= document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    todolist.push(name);
    inputElement.value = '';

    renderTodoList();
}

function renderTodoList() {
    let todoListHTML='';
    for(let i=0;i<todolist.length;i++) {
        const todo=todolist[i];
        const html=`<p>${todo}</p>`;
        todoListHTML+=html;
        
    }
    document.querySelector('.js-todolist')
        .innerHTML=todoListHTML;
}