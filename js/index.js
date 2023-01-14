const $ = (selector) => document.querySelector(selector);

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);
    $('.scrollNum').innerText = scrollTop;

});


gsap.to(".bg03", {
    scale: 3,
    height: 30,
    // duration: 10,
    scrollTrigger: {
      trigger: "#section01",
      start: "0 top",
      end: "+=1000",
      scrub: true,
    },
  });
