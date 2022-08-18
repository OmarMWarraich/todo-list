import _ from 'lodash';
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
                      <ul class="todo-list-items"></ul>
                      <button class="btn">Clear all completed</button>
                      `;
body.appendChild(todoList);

const todoArray = [
  {
    description: "wash the dishes",
    completed: false,
    index: 0,
  },
  {
    description: "do the laundry",
    completed: false,
    index: 1,
  },
  {
    description: "take the dog for a walk",
    completed: false,
    index: 2,
  }
];

const todoListItems = document.querySelector('.todo-list-items');
todoArray.forEach(todo => {
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');
  todoItem.innerHTML = `
                        <div>
                        <input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''}>
                        <span class="todo-description">${todo.description}</span>
                        </div>
                        <div class="dots"></div>
                        <hr>
                        `;
  todoListItems.appendChild(todoItem);
});

window.onload = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const todoItem = e.target.parentElement;
      todoItem.classList.toggle('completed');
    } );
  } );
}