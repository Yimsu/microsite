const $ = (selector) => document.querySelector(selector);

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  //console.log(scrollTop);
  $(".scrollNum").innerText = scrollTop;

  if (scrollTop > 1200) {
    $(".rbtext_01").classList.add("on");
  }

  if (scrollTop > 1200) {
    $(".lbtext_01").classList.add("on");
  }

  // 얘를 넣으면 스크롤이 왔다갔다 함;;;
  if (scrollTop > 4700) {
    $(".intelligent_anc_03").classList.add("on");
  }
  if (scrollTop > 5600) {
    $(".left_bottom_text_03").classList.add("on");
  }

  if (scrollTop > 6300) {
    $(".title1_04").classList.add("on");
  }
  if (scrollTop > 6400) {
    $(".title2_04").classList.add("on");
  }
});

gsap.to(".fix01", {
  scrollTrigger: {
    trigger: ".trigger01",
    start: "top top",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false,
    scrub: true,
  },
});
// 첫배경화면 (검정색)
gsap.to(".bg01", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: "+=1000",
    scrub: true,
  },
});

gsap.to(".maintitle01", {
  y: -1120,
  scale: 3,
  duration: 10,
  scrollTrigger: {
    trigger: "#section02",
    start: 3300,
    end: "+=2000",
    scrub: true,
  },
});

gsap.to(".maintitle01 .inside", {
  height: 0,
  scrollTrigger: {
    trigger: "#section01",
    start: "bottom bottom",
    end: "+=30000",
    scrub: true,
  },
});

// section01 메인 사진
gsap.to(".mainimg01", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#section01",
    start: "610 top",
    end: "+=1000",
    scrub: true,
  },
});
gsap.to(".mainimg01 img", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#section01",
    start: "2000 top",
    end: "+=1000",
    scrub: true,
  },
});

// 메인 텍스트
gsap.to(".main_text_01", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#section01",
    start: "610 top",
    end: "+=1000",
    scrub: true,
  },
});
gsap.to(".main_text_01 img", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#section01",
    start: "2000 top",
    end: "+=1000",
    scrub: true,
  },
});

//롱텍스트
gsap.to(".long_text_01", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: "+=1000",
    scrub: true,
  },
});
gsap.to(".long_text_01 img", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#section01",
    start: "2000 top",
    end: "+=1000",
    scrub: true,
  },
});

gsap.to(".rbtext_01", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#section01",
    start: "2500 top",
    end: "+=400",
    scrub: true,
  },
});
gsap.to(".lbtext_01", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#section01",
    start: "2500 top",
    end: "+=400",
    scrub: true,
  },
});

//////////////////////////////////////// section03
gsap.to(".main_picture01_03", {
  top: 220,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section02",
    start: "bottom bottom",
    end: "+=1200",
    scrub: true,
  },
});
gsap.to(".main_picture02_03", {
  //최종위치
  bottom: 218,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section02",
    start: "bottom bottom",
    end: "+=1200",
    scrub: true,
  },
});
gsap.to(".main_right_title_03", {
  //최종위치
  right: 218,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section02",
    start: "bottom bottom",
    end: "+=1200",
    scrub: true,
  },
});

gsap.to(".main_left_title_03", {
  //최종위치
  left: 196,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section02",
    start: "bottom bottom",
    end: "+=1200",
    scrub: true,
  },
});

gsap.to("#section04 .container", {
  scrollTrigger: {
    trigger: "#section04",
    start: "top top",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false,
    scrub: true,
  },
});

//////////////////////////////////////// section04
/* 스크롤 시작하기 전에 대기할 시간 */
const Section4ScrollDelay = 800;

const Section4Height = document.getElementById("section04").offsetHeight;

gsap.to("#section04 .slides", {
  x: -Section4Height,
  scrollTrigger: {
    trigger: ".section04-marker",
    start: `top+=${Section4ScrollDelay}px top`,
    end: `+=${Section4Height}`,
    scrub: true,
  },
});

gsap.to(".circle_text_04", {
  rotation: 360,
  ease: "none",
  duration: 15,
  repeat: -1,
});

// gsap.to('.sticky-parent', {
//   // x: -innerWidth*3,
//   scrollTrigger: {
//       trigger: "#section04",
//       start: "top top",
//       // end: () => "+=" + 300,
//       end: 'bottom bottom',
//       pin: true,
//       // pinSpace:false,
//       pinSpacing: false,
//       scrub: true,
//       markers: true
//   }
// });

// gsap.to('.fix03', {

//   scrollTrigger: {
//     trigger: "#section03",
//     start: "top top",
//     end: 'bottom bottom',
//     pin: true,
//     pinSpacing: false,
//     scrub: true,
//   }
// });

// gsap.to('.horizontal03', {

//   x: -2080,
//     scrollTrigger: {
//     trigger: "#section03",
//     start: "top top",
//     end: "+=2080",
//     // end: 'bottom bottom',
//     // horizontal: true,
//     scrub: true,
//     }
// });

// gsap.to('.bg_14', {
//   opacity: 1,
//   scrollTrigger: {
//   trigger: "#section14",
//   start: "top bottom",
//   end: "+=0",
//   scrub: true,
//   }
// });
