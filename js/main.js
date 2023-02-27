const $ = (selector) => document.querySelector(selector);

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  console.log(scrollTop);

  const createScrollTrap = (name, offset) => {
    let count = 0;

    const onWheel = (e) => {
      console.log(count);
      if (e.deltaY > 0) {
        count++;

        if (count >= 100) {
          cleanUp();
        }
      } else {
        cleanUp();
      }
    };

    const cleanUp = () => {
      scroller.paused(false);
      document.body.removeEventListener("mousewheel", onWheel);
    };

    if (scrollTop > offset) {
      if (window[name] === undefined) {
        window[name] = {
          onWheel,
          cleanUp,
          top: scrollTop,
        };

        scroller.paused(true);

        document.body.addEventListener("mousewheel", onWheel);
      }
    }
    if (scrollTop <= window[name]?.top - 500) {
      window[name] = undefined;
    }
  };

  //console.log(scrollTop);
  $(".scrollNum").innerText = scrollTop;

  if (scrollTop > 1200) {
    $(".rbtext_01").classList.add("on");
  } else {
    $(".rbtext_01").classList.remove("on");
  }

  if (scrollTop > 1200) {
    $(".lbtext_01").classList.add("on");
  } else {
    $(".lbtext_01").classList.remove("on");
  }

  if (scrollTop > 4700) {
    $(".intelligent_anc_03").classList.add("on");
  } else {
    $(".intelligent_anc_03").classList.remove("on");
  }
  if (scrollTop > 5600) {
    $(".left_bottom_text_03").classList.add("on");
  } else {
    $(".left_bottom_text_03").classList.remove("on");
  }

  if (scrollTop > 6300) {
    $(".title1_04").classList.add("on");
  } else {
    $(".title1_04").classList.remove("on");
  }
  if (scrollTop > 6400) {
    $(".title2_04").classList.add("on");
  } else {
    $(".title2_04").classList.remove("on");
  }
  if (scrollTop > 6400) {
    $(".picture_04").classList.add("on");
  } else {
    $(".picture_04").classList.remove("on");
  }

  if (scrollTop > 7600) {
    $(".picture1_05").classList.add("on");
  } else {
    $(".picture1_05").classList.remove("on");
  }
  if (scrollTop > 7823) {
    $(".picture2_05").classList.add("on");
  } else {
    $(".picture2_05").classList.remove("on");
  }
  if (scrollTop > 8045) {
    $(".picture3_05").classList.add("on");
  } else {
    $(".picture3_05").classList.remove("on");
  }
  if (scrollTop > 8200) {
    $(".picture4_05").classList.add("on");
  } else {
    $(".picture4_05").classList.remove("on");
  }

  if (scrollTop > 7600) {
    $(".immersive_05").classList.add("on");
  } else {
    $(".immersive_05").classList.remove("on");
  }
  // if (scrollTop > 7600) {
  //   $(".sound_05").classList.add("on");
  // } else {
  //   $(".sound_05").classList.remove("on");
  // }

  if (scrollTop > 7700) {
    $(".get_lost_in_05").classList.add("on");
  } else {
    $(".get_lost_in_05").classList.remove("on");
  }
  if (scrollTop > 7700) {
    $(".the_studio_sound_05").classList.add("on");
  } else {
    $(".the_studio_sound_05").classList.remove("on");
  }

  if (scrollTop > 8300) {
    $(".immersive_sound_05").classList.add("on");
  } else {
    $(".immersive_sound_05").classList.remove("on");
  }
  if (scrollTop > 8300) {
    $(".take_noise_free_calls_05").classList.add("on");
  } else {
    $(".take_noise_free_calls_05").classList.remove("on");
  }

  if (scrollTop > 8300) {
    $(".take_noise_free_calls_05").classList.add("on");
  } else {
    $(".take_noise_free_calls_05").classList.remove("on");
  }

  if (scrollTop > 9500) {
    $("#section06").classList.add("off");
  } else {
    $("#section06").classList.remove("off");
  }

  if (scrollTop > 9500) {
    $(".image1_on_06").classList.add("off");
    $(".image1_off_06").classList.remove("off");
  } else {
    $(".image1_off_06").classList.add("off");
    $(".image1_on_06").classList.remove("off");
  }

  if (scrollTop > 9500) {
    $(".image2_on_06").classList.add("off");
    $(".image2_off_06").classList.remove("off");
  } else {
    $(".image2_off_06").classList.add("off");
    $(".image2_on_06").classList.remove("off");
  }

  if (scrollTop > 9500) {
    $(".image3_on_06").classList.add("off");
    $(".image3_off_06").classList.remove("off");
  } else {
    $(".image3_off_06").classList.add("off");
    $(".image3_on_06").classList.remove("off");
  }

  if (scrollTop > 9500) {
    $(".title1_on_06").classList.add("off");
    $(".title1_off_06").classList.remove("off");
  } else {
    $(".title1_off_06").classList.add("off");
    $(".title1_on_06").classList.remove("off");
  }
  if (scrollTop > 9500) {
    $(".title2_on_06").classList.add("off");
    $(".title2_off_06").classList.remove("off");
  } else {
    $(".title2_off_06").classList.add("off");
    $(".title2_on_06").classList.remove("off");
  }
  if (scrollTop > 9500) {
    $(".title3_on_06").classList.add("off");
    $(".title3_off_06").classList.remove("off");
  } else {
    $(".title3_off_06").classList.add("off");
    $(".title3_on_06").classList.remove("off");
  }

  if (scrollTop > 9500) {
    $(".on_background_on_06").classList.add("off");
    $(".on_background_off_06").classList.remove("off");
  } else {
    $(".on_background_off_06").classList.add("off");
    $(".on_background_on_06").classList.remove("off");
  }

  if (scrollTop > 9500) {
    $(".on_circle_on_06").classList.add("off");
    $(".on_circle_off_06").classList.remove("off");
  } else {
    $(".on_circle_off_06").classList.add("off");
    $(".on_circle_on_06").classList.remove("off");
  }

  if (scrollTop > 9500) {
    $(".on_06").classList.add("off");
    $(".off_06").classList.remove("off");
  } else {
    $(".off_06").classList.add("off");
    $(".on_06").classList.remove("off");
  }

  // if (scrollTop > 10500) {
  //   $(".image_07").classList.add("on");
  // } else {
  //   $(".image_07").classList.remove("on");
  // }

  if (scrollTop > 10300) {
    $(".title1_07").classList.add("on");
  } else {
    $(".title1_07").classList.remove("on");
  }
  if (scrollTop > 10400) {
    $(".title2_07").classList.add("on");
  } else {
    $(".title2_07").classList.remove("on");
  }

  if (scrollTop > 12374) {
    $(".title_08").classList.add("on");
  } else {
    $(".title_08").classList.remove("on");
  }

  if (scrollTop > 13000) {
    $(".picture_08").classList.add("on");
  } else {
    $(".picture_08").classList.remove("on");
  }

  if (scrollTop > 15800) {
    $(".the_right_fit_is_08").classList.add("on");
  } else {
    $(".the_right_fit_is_08").classList.remove("on");
  }
  if (scrollTop > 15800) {
    $(".right_here_08").classList.add("on");
  } else {
    $(".right_here_08").classList.remove("on");
  }
  if (scrollTop > 15800) {
    $(".text1_08").classList.add("on");
  } else {
    $(".text1_08").classList.remove("on");
  }
  if (scrollTop > 15800) {
    $(".text2_08").classList.add("on");
  } else {
    $(".text2_08").classList.remove("on");
  }

  if (scrollTop > 20300) {
    $(".img_10").classList.add("on");
  } else {
    $(".img_10").classList.remove("on");
  }

  if (scrollTop > 20300) {
    $(".glossy_10").classList.add("on");
  } else {
    $(".glossy_10").classList.remove("on");
  }
  if (scrollTop > 20300) {
    $(".finishes_10").classList.add("on");
  } else {
    $(".finishes_10").classList.remove("on");
  }

  if (scrollTop > 22000) {
    $(".line_11").classList.add("on");
  } else {
    $(".line_11").classList.remove("on");
  }

  if (scrollTop > 23500) {
    $(".email_line").classList.add("on");
  } else {
    $(".email_line").classList.remove("on");
  }
  if (scrollTop > 23500) {
    $(".united_states_line").classList.add("on");
  } else {
    $(".united_states_line").classList.remove("on");
  }

  if (scrollTop > 27000) {
    $(".galaxy_buds_image02_13").classList.add("on");
  } else {
    $(".galaxy_buds_image02_13").classList.remove("on");
  }
  if (scrollTop > 27000) {
    $(".galaxy_buds_image03_13").classList.add("on");
  } else {
    $(".galaxy_buds_image03_13").classList.remove("on");
  }

  if (scrollTop > 27600) {
    $(".smart_text_13").classList.add("on");
  } else {
    $(".smart_text_13").classList.remove("on");
  }

  if (scrollTop > 27600) {
    $(".small_title_13").classList.add("on");
  } else {
    $(".small_title_13").classList.remove("on");
  }

  if (scrollTop > 27600) {
    $(".long_text_13").classList.add("on");
  } else {
    $(".long_text_13").classList.remove("on");
  }

  if (scrollTop > 28300) {
    $(".video_bg").classList.add("on");
  } else {
    $(".video_bg").classList.remove("on");
  }
  if (scrollTop > 28300) {
    $(".img_bg").classList.add("on");
  } else {
    $(".img_bg").classList.remove("on");
  }

  if (scrollTop > 28300) {
    $(".galaxy_title_13").classList.add("on");
  } else {
    $(".galaxy_title_13").classList.remove("on");
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

//////////////////////////////////////// section03  //////////////////////////////////////
gsap.to(".main_picture01_03", {
  top: 220,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section02",
    start: "bottom bottom",
    end: "+=1200",
    scrub: 1,
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
    scrub: 1,
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
    scrub: 1,
  },
});

gsap.to(".main_left_title_03", {
  //최종위치
  left: 196,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section02",
    start: "bottom bottom",
    end: "+=1500",
    scrub: 1,
  },
});

////////////////////////////// section04 //////////////////////////////////////
gsap.to("#section04 .container", {
  scrollTrigger: {
    trigger: "#section04",
    start: "top top",
    end: "bottom+=1000 bottom", // 스크롤 기다리고 싶은 숫자만큼넣고 css도 변경
    pin: true,
    pinSpacing: false,
    scrub: 1,
  },
});

gsap.to("#section04 .picture_04", {
  duration: 10,
  width: 1920,
  height: 980,
});

////////////////////////////// section05 //////////////////////////////////////

gsap.to("#section05 .circle_text_05", {
  rotation: 360,
  ease: "none",
  duration: 15,
  repeat: -1,
});

gsap.to("#section05 .title_first_05", {
  //최종위치
  left: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section05",
    start: "bottom bottom",
    end: "+=2000",
    scrub: 1,
  },
});

gsap.to("#section05 .title_second_05", {
  //최종위치
  left: 30,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section05",
    start: "bottom bottom",
    end: "+=2000",
    scrub: 1,
  },
});

////////////////////////////// section06 //////////////////////////////////////

gsap.to(".title1_on_06", {
  // 사진 가로 크기
  x: -2975,
  ease: "none",
  duration: 20,
  repeat: -1,
});
gsap.to(".title1_off_06", {
  // 사진 가로 크기
  x: -2975,
  ease: "none",
  duration: 20,
  repeat: -1,
});
gsap.from(".title2_on_06", {
  // 사진 가로 크기
  x: -1760,
  ease: "none",
  duration: 20,
  repeat: -1,
});
gsap.from(".title2_off_06", {
  // 사진 가로 크기
  x: -1760,
  ease: "none",
  duration: 20,
  repeat: -1,
});
gsap.to(".title3_on_06", {
  // 사진 가로 크기
  x: -2975,
  ease: "none",
  duration: 20,
  repeat: -1,
});
gsap.to(".title3_off_06", {
  // 사진 가로 크기
  x: -2975,
  ease: "none",
  duration: 20,
  repeat: -1,
});

//////////////////////////// section07 //////////////////////////////////////
gsap.to("#section07 .circle_line", {
  rotation: 360,
  ease: "none",
  duration: 10,
  repeat: -1,
});

//////////////////////////// section08 //////////////////////////////////////
gsap.to(".side_text_08", {
  // 사진 가로 크기
  y: -585,
  ease: "none",
  duration: 4,
  repeat: -1,
});

gsap.to("#section08 .circle_line_08", {
  rotation: 360,
  ease: "none",
  duration: 10,
  repeat: -1,
});

/* 스크롤 시작하기 전에 대기할 시간 */
const Section4ScrollDelay = 800;

const Section4Height = document.getElementById("section04").offsetHeight;

gsap.to("#section04 .slides", {
  x: -Section4Height,
  scrollTrigger: {
    trigger: ".section04-marker",
    start: `top+=${Section4ScrollDelay}px top`,
    end: `+=${Section4Height - 1500}`,
    scrub: true,
  },
});

gsap.to(".circle_text_04", {
  rotation: 360,
  ease: "none",
  duration: 15,
  repeat: -1,
});

// gsap.to(".floating > img", {
//   duration: 2,
//   yoyo: true,
//   y: -20,
//   yoyoEase: "power2.in",
//   repeat: -1,
// });

gsap.to(".blinking01", {
  duration: 1,
  yoyo: true,
  delay: 0.5,
  opacity: 0,
  yoyoEase: "power2.in",
  repeat: -1,
});

gsap.to(".blinking02", {
  duration: 1,
  yoyo: true,
  opacity: 0,
  delay: 0.8,
  yoyoEase: "power2.in",
  repeat: -1,
});

gsap.to(".blinking03", {
  duration: 1,
  yoyo: true,
  opacity: 0,
  yoyoEase: "power2.in",
  repeat: -1,
});
/////////////////////////// section09 ///////////////////////////////////
gsap.to("#section09 .images", {
  top: -1500,
  scrollTrigger: {
    trigger: `#section09`,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});
/////////////////////////// section10 ///////////////////////

/////////////////////////// section11 //////////////////////////////////////
gsap.to(".circle_text_11", {
  rotation: 360,
  ease: "none",
  duration: 10,
  repeat: -1,
});

/////////////////////////// footer /////////////////////
gsap.to(".contact_footer", {
  // 사진 가로 크기
  x: -1549,
  ease: "none",
  duration: 8,
  repeat: -1,
});

gsap.to("#footer .circle_text_footer", {
  rotation: 360,
  ease: "none",
  duration: 15,
  repeat: -1,
});

$(".circle_text_footer").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const tl = gsap.timeline();

tl.to("#section11 .image01_11", { opacity: 1, scale: 1 });
tl.to("#section11 .image01_11", {
  transformOrigin: "left top",
  scale: 0.3,
  opacity: 0,
});
tl.to("#section11 .image02_11", { opacity: 1, scale: 1 });
tl.to("#section11 .image02_11", {
  transformOrigin: "left top",
  scale: 0.3,
  opacity: 0,
});
tl.to("#section11 .image03_11", { opacity: 1, scale: 1 });
tl.to("#section11 .image03_11", {
  transformOrigin: "left top",
  scale: 0.3,
  opacity: 0,
});
tl.to("#section11 .image04_11", { opacity: 1, scale: 1 });
tl.to("#section11 .image04_11", {
  transformOrigin: "left top",
  scale: 0.3,
  opacity: 0,
});

ScrollTrigger.create({
  animation: tl,
  trigger: "#section11",
  start: "top top",
  end: "+=3600",
  scrub: 1,
});

gsap.to(".take_12", {
  //최종위치
  left: -1000,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section12",
    start: "top bottom",
    end: "+=1000",
    scrub: 1,
  },
});
gsap.to(".noise_free_12", {
  //최종위치
  left: -1600,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section12",
    start: "top bottom",
    end: "+=1300",
    scrub: 1,
  },
});
gsap.to(".calls_12", {
  //최종위치
  left: -1200,
  opacity: 1,
  scrollTrigger: {
    trigger: "#section12",
    start: "top bottom",
    end: "+=1000",
    scrub: 1,
  },
});

// gsap.to('#section13 .video_bg', {

//   width:1920,
//   scrollTrigger: {
//       trigger: "#section13",
//       start: "1000 top",
//       end: () => "+=" + 1000,
//       // end: 'bottom bottom',
//       scrub: 1,
//   }
// });
// gsap.to('#section13 .img_bg > img', {

//   height:0,
//   scrollTrigger: {
//       trigger: "#section13",
//       start: "top top",
//       end: () => "+=" + 1000,
//       // end: 'bottom bottom',
//       scrub: 1,
//   }
// });

const pinSection = (sectionID, height) => {
  const div = document.createElement("div");

  div.className = "container";

  const section = document.getElementById(sectionID.substr(1));
  const child = section.children[0];

  section.style.height = `${height}px`;

  section.removeChild(child);
  div.appendChild(child);
  section.appendChild(div);

  setTimeout(() => {
    gsap.to(`${sectionID} .container`, {
      scrollTrigger: {
        trigger: sectionID,
        start: "top top",
        end: "bottom bottom", // 스크롤 기다리고 싶은 숫자만큼넣고 css도 변경
        pin: true,
        pinSpacing: false,
        scrub: 1,
      },
    });
  }, 1);
};

const pinObject = (sectionID) => {
  gsap.to(`${sectionID} .pinned`, {
    scrollTrigger: {
      trigger: `${sectionID} .container`,
      start: "top",
      end: "bottom",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });
};

pinObject("#section09");
// 멈추기 위해서 넣기 스크롤 양만큼 숫자
pinSection("#section10", 2400);
pinSection("#section11", 4300);
// pinSection("#section12", 10);
pinSection("#section13", 3500);

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
