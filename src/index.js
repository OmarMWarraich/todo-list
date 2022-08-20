import './style.css';

const body = document.querySelector('body');
const todoList = document.createElement('div');
todoList.classList.add('todo-list');
todoList.innerHTML = `
                      <div class="todo-title"><h1>Today's To Do</h1><span class=reload>&#x21bb;</span></div>
                      <hr>
                      <div class="input">
                      <input type="text" class="todo-input" placeholder="Add to your list"></input><span>&#x2714;</span>
                      </div>
                      <hr>
                      <div class="todo-list-items"></div>
                      <button class="btn">Clear all completed</button>
                      `;
body.appendChild(todoList);

const todoArray = [];

const todoListItems = document.querySelector('.todo-list-items');
todoArray.forEach((todo) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');
  todoItem.innerHTML = `
                        <div class="todo">
                        <input id="checkbox" type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''}>
                        <span class="todo-description">${todo.description}</span>
                        <div class="dots"></div>
                        </div>
                        <hr>
                        `;
  todoListItems.appendChild(todoItem);
});

window.onload = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const todoItem = e.target.parentElement;
      todoItem.classList.toggle('completed');
    });
  });
};