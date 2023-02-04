const menu = document.getElementById("menu-overlay");
let menuShown = false;

function showMenu() {
  menu.classList.add("active");
  menuShown = true;
}

function hideMenu() {
  menu.classList.remove("active");
  menuShown = false;
}

function toggleMenu() {
  if (menuShown) {
    hideMenu();
  } else {
    showMenu();
  }
}
