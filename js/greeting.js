"use strick";

history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

const greeting = document.querySelector(".greeting-text span");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

// 1. input value를 local storage에 저장하기
function onLoginSubmit() {
  const usernameInput = loginInput.value;
  localStorage.setItem("username", usernameInput);
  paintGreeting(usernameInput);
}
// 2. local storage에서 get item 해오기
function paintGreeting(username) {
  greeting.innerText = `${username}, Have a good day`;
}

savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
