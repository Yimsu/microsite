ScrollTrigger.clearScrollMemory();
window.history.scrollRestoration = "manual";


/*
document.addEventListener('scroll', horizontalScroll);

//Selecting Elements
let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.sticky-parent');

// 수평 폭에 매핑해야 하는 실제 스크롤 높이를 찾으려면, stickyparent의 높이 - sticky의 높이
let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

//Scroll function 
function horizontalScroll(e){

  e.preventDefault();
  e.stopPropagation();

    //Checking whether the sticky element has entered into view or not
    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        return;
    }else{
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * (-scrolled) * 0.85;
    
    }
}
*/


const scroller = ScrollSmoother.create({
  content: "#smooth-content",
  wrapper: "#smooth-wrapper",
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  normalizeScroll: false, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
  ignoreMobileResize: true // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
});