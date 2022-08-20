

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

let removeTodo = (index) => {
    todoArray.splice(index, 1);
    renderTodo();
}

let editTodo = (index, newDescription) => {
    todoArray[index].description = newDescription;
    renderTodo();
}

let renderTodo = () => {
    const todoListItems = document.querySelector('.todo-list-items');
    todoListItems.innerHTML = '';
    

    todoArray.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
                              <div class="todo">
                              <input id="checkbox" type="checkbox" class="checkbox" ${todo.completed} ? 'checked' : ''}>
                              <span class="todo-description" type="submit" contenteditable="true">${todo.description}</span>
                              <div class="dots"></div>
                              </div>
                              <hr>
                              `;
        
        todoListItems.appendChild(todoItem);
        const dot = todoItem.querySelector('.dots');

        
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const index = todoArray.indexOf(e.target.parentNode.parentNode.parentNode);
            console.log(index);
            removeTodo(index);
            console.log(todoArray);

        });
        
    });
    /* const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const todoItem = e.target.parentElement;
            todoItem.classList.toggle('completed');
        }
        );
    }
    ); */    
};


}

export default Tasks;