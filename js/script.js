const btnTheme = document.getElementById("theme-btn");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});


menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
