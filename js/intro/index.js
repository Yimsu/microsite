setTimeout(() => {
  $("#section01 .upper").addClass("fade-out-1");
  $("#section01 .lower").addClass("fade-out-1");
  $("#section01 .text").addClass("fade-out-1");
}, 2000);

setTimeout(() => {
  $("#section01 .upper").addClass("fade-out-2");
  $("#section01 .lower").addClass("fade-out-2");
  $("#section01 .text").addClass("fade-out-2");
}, 3000);

setTimeout(() => {
  $("#section01 .upper").addClass("fade-out-3");
  $("#section01 .lower").addClass("fade-out-3");
  $("#section01 .text").addClass("fade-out-3");
}, 5000);

const Step2 = 5600;

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
