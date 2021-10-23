document.addEventListener("DOMContentLoaded", function (event) {
  // wait until window, stylesheets, images, links, and other media assets are loaded
  window.onload = function () {
    // Your code and/or method calls here
    document.getElementById("loadingIntro").style.visibility = "visible";
  };
});

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
// const projectsBtn = document.querySelector(".projects__btn");

//Projects
// const projectsNumber02 = document.querySelector(".number__02");
// const projectsHeading = document.querySelector(".projects__heading");
// const projectsCard = document.querySelectorAll(".projects__card");

// Loading Text (Name) - Enter
const loadingScreenTL = gsap.timeline();

gsap.from(loadingFirstName, {
  duration: 1.5,
  y: 26,
  ease: Expo.easeInOut,
});

gsap.from(loadingLastName, {
  duration: 1.5,
  y: -25,
  ease: Expo.easeInOut,
});

// Loading Text (Name) - Exit
const loadingNameTL = gsap.timeline();

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
// .from([projectsNumber02, projectsHeading], {
//   opacity: 0,
//   delay: -0.7,
//   y: 110,
//   duration: 1.5,
//   ease: "power3.out",
//   stagger: 0.2,
// });

gsap.to(bodyContainer, {
  duration: 0,
  delay: 2.3,
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
