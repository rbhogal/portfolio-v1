window.onbeforeunload = function () {
  console.log("unloading");
  loadingScreenTL.to(loadingScreen, {
    duration: 1,
    delay: 0.8,
    top: "100%",
    ease: Expo.easeInOut,
  });
};

//Loading screen
const loadingScreen = document.querySelector(".loading-screen");
const loadingScreenAddition = document.querySelector(
  ".loading-screen-addition"
);

//Body
const bodyContainer = document.querySelector(".container");

//Header
const header = document.querySelector(".header");
const aboutLink = document.querySelector(".navbar-item__about");

//Footer
const footer = document.querySelector(".footer");

const loadingScreenTL = gsap.timeline();

// Loading Screen Exit
loadingScreenTL.to(loadingScreen, {
  duration: 0.75,
  delay: 0.75,
  top: "-100%",
  ease: Expo.easeInOut,
});

gsap.to(bodyContainer, {
  duration: 0,
  delay: 1.5,
  overflow: "visible",
});

/*
//Projects Section
const projectsHeaderTL = gsap.timeline();

// projectsHeaderTL.

const projectCardsTL = gsap.timeline();

projectCardsTL.from(projectsCard, {
  opacity: 0,
  y: 200,
  duration: 0.3,
  ease: "power3.out",
  stagger: 0.2,
});
 */
const controller = new ScrollMagic.Controller();
/* 
new ScrollMagic.Scene({
  triggerElement: "#projectsBtn",
  triggerHook: 0,
  reverse: true,
})
  .addIndicators()
  .setTween(projectsHeaderTL)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#projectsBtn",
  triggerHook: 0,
  reverse: true,
})
  .addIndicators()
  .setTween(projectCardsTL)
  .addTo(controller);
 */
// .from([aboutLink, footer, projectsBtn], {
//   y: 50,
//   duration: 1.5,
//   ease: "power3.inOut",
// });

/* 
  gsap.to(loadingScreenAddition, {
    duration: 2.5,
    delay: 2.3,
    top: "-110%",
    ease: Expo.easeInOut,
  })
*/

// pageLoadTL.to([loadingScreen, loadingIntro], {
//   duration: 4,
//   delay: 2,
//   top: "-110%",
//   ease: Expo.easeInOut,
// });
// .to(loadingScreen, {
//   duration: 4,
//   delay: 6.6,
//   top: "-110%",
//   ease: Expo.easeInOut,
// });

// gsap.from(loadingIntro, {
//   duration: 3,
//   delay: 8.4,
//   opacity: 0,
//   y: 20,
//   top: "-110%",
//   ease: Expo.easeInOut,
// });

// gsap.from(loadingIntro, {
//   duration: 3,
//   delay: 8.4,
//   opacity: 0,
//   y: 20,
//   top: "-110%",
//   ease: Expo.easeInOut,
// });
