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

// const home = document.getElementsByClassName("hover_home");

// function homeHover() {
//   home.classList.add("on");
//   // menuShown = true;
// }

// $('.hover_home').mouseenter(function() {
//   $('.hover_home').addClass('on');
// })

// gsap.to(".galaxy_buds_pro", {
//   // 사진 가로 크기
//   y: -1732,
//   ease: "none",
//   duration: 8,
//   repeat: -1,
// });
