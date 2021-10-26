// Loading Screen
const loadingScreen = document.querySelector(".loading-screen");
const loadingScreenAddition = document.querySelector(
  ".loading-screen-addition"
);
const bodyContainer = document.querySelector(".container");

// Header
const header = document.querySelector(".home__header");
const navLink = document.querySelector(".nav__link");

// footer
const footer = document.querySelector(".footer");

const loadingScreenTL = gsap.timeline();

gsap.to(bodyContainer, {
  duration: 0,
  delay: 1.5,
  overflow: "visible",
});

const controller = new ScrollMagic.Controller();
const controller2 = new ScrollMagic.Controller();

// Home Page
if (window.location.pathname === "/src/index.html") {
  const projectsHeading = document.querySelector(".projects__heading");
  const projectCard01 = document.querySelector(".projects__card--01");
  const projectCard02 = document.querySelector(".projects__card--02");
  const projectCard03 = document.querySelector(".projects__card--03");
  const projectCard04 = document.querySelector(".projects__card--04");

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.75,
      delay: 0.75,
      top: "-100%",
      ease: Expo.easeInOut,
    })
    .from([header, navLink], {
      delay: -0.1,
      y: 16,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
    })
    .from(projectsHeading, {
      delay: -0.1,
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from([projectCard01, projectCard02], {
      delay: -0.6,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });

  // Projects 3 - 4
  const projectsTL = gsap.timeline();

  projectsTL.from([projectCard03, projectCard04], {
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
  });

  new ScrollMagic.Scene({
    triggerElement: "#projectsTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(projectsTL)
    .addTo(controller);

  // Footer
  const footerTL = gsap.timeline();

  footerTL.from(footer, {
    delay: -0.7,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
  });

  new ScrollMagic.Scene({
    triggerElement: "#footerTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(footerTL)
    .addTo(controller2);
}

/*
    const featuresTL = gsap.timeline();

featuresTL
  .from([featuresContentTitle, featuresContentP, featuresContentButton], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  })
  .from(featuresList, {
    delay: -0.4,
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 0.4,
    },
  });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: "#featureBannerGreen",
  triggerHook: 0,
  reverse: false,
})
  .addIndicators()
  .setTween(featuresTL)
  .addTo(controller);
*/

// Stanza
if (window.location.pathname === "/src/project-stanza.html") {
  console.log("projectStanza");
  const projectStanzaHeader = document.querySelector(
    ".project__stanza__header"
  );

  // Loading Screen - Exit
  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.75,
      delay: 0.75,
      top: "-100%",
      ease: Expo.easeInOut,
    })
    .to([header, navLink], {
      delay: 0,
      duration: 0,
      visibility: "visible",
    })
    .from([header, navLink], {
      delay: -0.1,
      y: 16,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
    });
}

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
