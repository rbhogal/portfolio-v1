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

//Header
const header = document.querySelector(".header");
const aboutLink = document.querySelector(".navbar-item__about");

//Footer
const footer = document.querySelector(".footer");

//Home
const projectsBtn = document.querySelector(".projects__btn");

const loadingScreenTL = gsap.timeline();
const loadingNameTL = gsap.timeline();

gsap.from([aboutLink, footer, projectsBtn], {
  y: 50,
  duration: 1.5,
  ease: "power3.inOut",
});

gsap.from(loadingFirstName, {
  duration: 1.5,
  delay: 1,
  y: 25,
  ease: Expo.easeInOut,
});

gsap.from(loadingLastName, {
  duration: 1.5,
  y: -25,
  delay: 1,
  ease: Expo.easeInOut,
});

loadingNameTL.to([loadingFirstName, loadingLastName], {
  duration: 1.5,
  delay: 3,
  ease: Expo.easeInOut,
  y: -25,
});

gsap.to([loadingScreen, loadingIntro], {
  duration: 3.5,
  delay: 3,
  top: "-110%",
  ease: Expo.easeInOut,
});

gsap.to(loadingScreenAddition, {
  duration: 3.5,
  delay: 3.2,
  top: "-110%",
  ease: Expo.easeInOut,
});

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
