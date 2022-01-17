const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

let todoLists = [];

const TO_DO_LIST = "ToDoList";

function savedToDo() {}

function deletedToDo() {}

function toDoChecked(event) {
  const input = event.target;
  const div = input.parentNode;
  div.classList.toggle("checked");
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.setAttribute("class", "new-todo");
  const div = document.createElement("div");
  div.setAttribute("class", "input-box");
  const input = document.createElement("input");
  input.setAttribute("id", "cb");
  input.setAttribute("type", "checkbox");
  input.addEventListener("click", toDoChecked);
  const span = document.createElement("span");
  span.innerText = newTodo;
  const btn = document.createElement("button");
  btn.setAttribute("class", "delete");
  btn.innerText = "x";

  todoList.appendChild(li);
  li.appendChild(div);
  div.appendChild(input);
  div.appendChild(span);
  li.appendChild(btn);
}

function handleToDo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintToDo(newTodo);
}

todoForm.addEventListener("submit", handleToDo);
