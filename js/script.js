const $ = (selector) => document.querySelector(selector);

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);

});



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