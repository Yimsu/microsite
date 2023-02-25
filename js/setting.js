ScrollTrigger.clearScrollMemory();
window.history.scrollRestoration = "manual";

const scroller = ScrollSmoother.create({
  content: "#smooth-content",
  wrapper: "#smooth-wrapper",
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  normalizeScroll: false, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
  ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
  onUpdate: (e) => {
    console.log(e.scrollTop());
    return false;
  },
});
