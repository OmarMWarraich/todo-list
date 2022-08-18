import _ from 'lodash';
import './style.css';

const body = document.querySelector('body');
const todoList = document.createElement('div');
todoList.classList.add('todo-list');
todoList.innerHTML = `
                      <div class="todo-title"><h1>Today's To Do</h1><span class=reload>&#x21bb;</span></div>
                      <hr>
                      <input type="text" class="todo-input" placeholder="Add to your list"></input><span>&#x2714;</span>
                      <hr>
                      <ul class="todo-list-items"></ul>
                      <button>Clear all completed</button>
                      `
body.appendChild(todoList);