// new kursor({
//   type: 1,
//   removeDefaultCursor: true,
//   color: '#ffffff',
// });

//Loading screen
const loadingScreen = document.querySelector(".loading-screen");
const loadingScreenAddition = document.querySelector(
  ".loading-screen-addition"
);
const loadingIntro = document.querySelector(".loading-intro");
const loadingFirstName = document.querySelector(
  ".loading-intro__text--first-name"
);
const loadingLastName = document.querySelector(
  ".loading-intro__text--last-name"
);

//Body
const bodyContainer = document.querySelector(".container");

//Header
const header = document.querySelector(".header");
const aboutLink = document.querySelector(".navbar-item__about");

//Footer
const footer = document.querySelector(".footer");

//Home
const projectsBtn = document.querySelector(".projects__btn");

//Projects
const projectsNumber02 = document.querySelector(".number__02");
const projectsHeading = document.querySelector(".projects__heading");

// Timelines
const loadingScreenTL = gsap.timeline();
const loadingNameTL = gsap.timeline();
const projectsTL = gsap.timeline();

/* 
// Loading Text (Name) - Enter
gsap.from(loadingFirstName, {
  duration: 1.5,
  y: 25,
  ease: Expo.easeInOut,
});

gsap.from(loadingLastName, {
  duration: 1.5,
  y: -25,
  ease: Expo.easeInOut,
});

// Loading Text (Name) - Exit
loadingNameTL.to([loadingFirstName, loadingLastName], {
  duration: 1,
  delay: 1.5,
  ease: Expo.easeInOut,
  y: -25,
});

// Loading Screen Exit
loadingScreenTL.to([loadingScreen, loadingIntro], {
  duration: 1.5,
  delay: 1.5,
  top: "-110%",
  ease: Expo.easeInOut,
});

gsap.to(bodyContainer, {
  duration: 0,
  delay: 2.3,
  overflow: "visible",
});

 */

projectsTL.from([projectsNumber02, projectsHeading], {
  opacity: 0,
  y: 110,
  duration: 2,
  ease: "power3.out",
  stagger: 0.5,
});

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: "#projectsBtn",
  triggerHook: 0,
  reverse: true,
})
  .addIndicators()
  .setTween(projectsTL)
  .addTo(controller);

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
