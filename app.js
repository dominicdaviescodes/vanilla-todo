// selectors
// grab the input box where user types in todo item
const todoInput = document.querySelector('.todo-input');
// grab todo-button which submits each todo item
const todoButton = document.querySelector('.todo-button');
// grab the list that will display all the todo items
const todoList = document.querySelector('.todo-list')

// event listeners

todoButton.addEventListener('click', addTodo);


// functions

function addTodo(event) {
  // prevent form from submitting
  event.preventDefault;
  // put each todo item in the todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // check off button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn')
  todoDiv.appendChild(completedButton);
  // delete button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('complete-btn')
  todoDiv.appendChild(trashButton);
  // Append to list
  todoList.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = "";
}