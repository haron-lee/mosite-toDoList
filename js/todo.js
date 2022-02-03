"use strick";

const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

let toDos = [];

const TO_DO_LIST = "ToDoList";

function saveToDo() {
  localStorage.setItem(TO_DO_LIST, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDo();
}

function handleCheck(event) {
  const input = event.target;
  const div = input.parentNode;
  div.classList.toggle("checked");
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.setAttribute("class", "new-todo");
  const div = document.createElement("div");
  div.setAttribute("class", "input-box");
  const input = document.createElement("input");
  input.setAttribute("id", "cb");
  input.setAttribute("type", "checkbox");
  input.addEventListener("click", handleCheck);
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.setAttribute("class", "delete");
  btn.classList.add("hide");
  btn.innerText = "x";
  li.addEventListener("mouseover", () => {
    btn.classList.remove("hide");
  });
  li.addEventListener("mouseout", () => {
    btn.classList.add("hide");
  });
  btn.addEventListener("click", deleteToDo);

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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDo();
}

todoForm.addEventListener("submit", handleToDo);

const savedToDo = localStorage.getItem(TO_DO_LIST);

if (savedToDo !== null) {
  const parsedToDo = JSON.parse(savedToDo);
  toDos = parsedToDo;
  parsedToDo.forEach(paintToDo);
}
