const logoutBtn = document.querySelector("#logout");

function userLogout() {
  localStorage.removeItem("username");
  // url 변경필요
  location.replace("http://127.0.0.1:5500/index.html");
}

logoutBtn.addEventListener("click", userLogout);
