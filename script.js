// script.js

const myTasksInput = document.getElementById("mytasks");
const listsContainer = document.querySelector(".lists");
let myTasks = [];

function renderTodo() {
  listsContainer.innerHTML = '';

  for (let i = 0; i < myTasks.length; i++) {
    const listItem = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
      updateTaskStyle(i);
    });

    const taskText = document.createElement('span');
    taskText.textContent = myTasks[i];

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function () {
      deleteTask(i);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    listsContainer.appendChild(listItem);
  }
}

function add_to_do() {
  const taskValue = myTasksInput.value.trim();
  if (taskValue !== "") {
    myTasks.push(taskValue);
    myTasksInput.value = "";
    renderTodo();
  }
}

function deleteTask(index) {
  myTasks.splice(index, 1);
  renderTodo();
}

function updateTaskStyle(index) {
  const listItem = listsContainer.children[index];
  const checkbox = listItem.querySelector('input[type="checkbox"]');
  const taskText = listItem.querySelector('span');

  if (checkbox.checked) {
    taskText.style.textDecoration = 'line-through';
  } else {
    taskText.style.textDecoration = 'none';
  }
}

renderTodo();
