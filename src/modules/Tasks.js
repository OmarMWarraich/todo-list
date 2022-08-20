

const todoArray = [];
console.log(todoArray);

const Tasks = () => {
const textInput = document.querySelector('.todo-input');
const enterInput = document.querySelector('.enter-input');
enterInput.addEventListener('click', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    (textInput.value === '') ? alert('Please enter a task') : addTodo();
}

let addTodo = () => {
    const todo = {
        description: textInput.value,
        completed: false,
    };
    todoArray.push(todo);
    textInput.value = '';
    renderTodo();
    console.log(todoArray);
}


let renderTodo = () => {
    const todoListItems = document.querySelector('.todo-list-items');
    todoListItems.innerHTML = '';
    for(let i = 0; i < todoArray.length; i++) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
                              <div class="todo">
                              <input id="checkbox" type="checkbox" class="checkbox" ${todoArray[i].completed} ? 'checked' : ''}>
                              <span class="todo-description" type="submit">${todoArray[i].description}</span>
                              <div class="dots"></div>
                              </div>
                              <hr>
                              `;
        todoListItems.appendChild(todoItem);
    }

    /* const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const todoItem = e.target.parentElement;
            todoItem.classList.toggle('completed');
        }
        );
    }
    ); */
    
}
}

export default Tasks;