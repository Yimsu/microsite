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

gsap.to(".galaxy_buds_pro", {
  // 사진 가로 크기
  y: -1732,
  ease: "none",
  duration: 8,
  repeat: -1,
});
