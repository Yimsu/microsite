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

$(".menu_hover1").addEventListener("click", () => {
  menu.classList.remove("active");
});
$(".menu_hover2").addEventListener("click", () => {
  menu.classList.remove("active");
});
$(".menu_hover3").addEventListener("click", () => {
  menu.classList.remove("active");
});
$(".menu_hover4").addEventListener("click", () => {
  menu.classList.remove("active");
});

$(".hover_home").addEventListener("click", () => {
  window.scrollTo(0, 0);
});
$(".hover_about").addEventListener("click", () => {
  window.scrollTo(0, 11732);
});
$(".hover_color").addEventListener("click", () => {
  window.scrollTo(0, 20000);
});
$(".hover_contact").addEventListener("click", () => {
  window.scrollTo(0, 39300);
});

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
