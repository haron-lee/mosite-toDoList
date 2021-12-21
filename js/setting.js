const setting = document.querySelector("#setting");
const menu = document.querySelector("#menu");

setting.addEventListener("click", () => {
  if (menu.className === "menuOff") {
    menu.className = "menuOn";
  } else {
    menu.className = "menuOff";
  }
});
