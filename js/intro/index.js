setTimeout(() => {
  $("#section01 .upper").addClass("fade-out-1");
  $("#section01 .lower").addClass("fade-out-1");
  $("#section01 .text").addClass("fade-out-1");
}, 200);

setTimeout(() => {
  $("#section01 .upper").addClass("fade-out-2");
  $("#section01 .lower").addClass("fade-out-2");
  $("#section01 .text").addClass("fade-out-2");
}, 1500);

setTimeout(() => {
  $("#section01 .upper").addClass("fade-out-3");
  $("#section01 .lower").addClass("fade-out-3");
  $("#section01 .text").addClass("fade-out-3");
}, 3000);

const Step2 = 3500;

setTimeout(() => {
  // 검은색으로 덮기
  $(".overlay").addClass("active");

  setTimeout(() => {
    $("#section02").addClass("active");
  }, 111);
}, Step2);

setTimeout(() => {
  $("#section01").remove();
}, Step2 + 1000);
setTimeout(() => {
  // 검은색 치우기
  $(".overlay").removeClass("active");
}, Step2 + 2000);

gsap.to(".circle_text", {
  rotation: 360,
  ease: "none",
  duration: 15,
  repeat: -1,
});
