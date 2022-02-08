//////////////////////////////////////////////////////////////

// * Cursor gif animations (desktop) are in customCursor.js *

//////////////////////////////////////////////////////////////

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

const bodyContainer = document.querySelector(".container");

// Header
const header = document.querySelector(".header");
const navLink = document.querySelectorAll(".nav__link");

const loadingCoverTop = document.querySelector(".loading-intro__cover--top");

// Loading Text (Name) - Enter
const loadingScreenTL = gsap.timeline();
const loadingNameEnterTL = gsap.timeline();

// About
const nameHeader = document.querySelector(".hover-text-wave");
const aboutSubheading = document.querySelector(".about__intro__subheading");
const aboutLineBreak = document.querySelector(".about__line-break");
const aboutContentP = document.querySelectorAll(".about__intro__container p");
const listItems = document.querySelectorAll(
  ".about__intro__content__skills div"
);
const profilePic = document.querySelector(".profile-pic__container--mobile");
const youSmartGif = document.querySelector(".you-smart-gif-mobile");
const troyAbedHandshakeGif = document.querySelector(
  ".troy-abed-handshake-gif--mobile"
);
const callMeGif = document.querySelector(".call-me-gif-mobile");

const easterEggsHint = document.querySelector(".easter-eggs-hint");

gsap.to(loadingIntro, {
  autoAlpha: 1,
});

////////////////////////////////////////////////////
// For Mobile
if (window.innerWidth <= 1200) {
  loadingNameEnterTL
    .from(loadingFirstName, {
      duration: 1.5,
      y: 26,
      ease: Expo.easeInOut,
    })
    .to([loadingCoverTop], {
      duration: 0.5,
      y: -100,
      ease: Expo.ease,
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
  loadingScreenTL
    .to([loadingScreen, loadingIntro], {
      duration: 1.5,
      delay: 1.5,
      top: "-110%",
      ease: Expo.easeInOut,
    })
    .from(
      [
        nameHeader,
        profilePic,
        aboutSubheading,
        aboutLineBreak,
        aboutContentP,
        listItems,
        callMeGif,
        troyAbedHandshakeGif,
      ],
      {
        delay: 0,
        y: 16,
        opacity: 0,
        duration: 0.8,
        ease: '"power3.out"',
        // stagger: 0.1,
      }
    );

  //////////////////////////////////////////////////////////////////////////////
  // Footer

  const footerTL = gsap.timeline();
  const footer = document.querySelector(".footer");
  const controller = new ScrollMagic.Controller();

  footerTL.from(footer, {
    duration: 0.8,
    opacity: 0,
    ease: Expo.out,
  });

  new ScrollMagic.Scene({
    triggerElement: "#footerScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(footerTL)
    .addTo(controller);

  gsap.to(bodyContainer, {
    duration: 0,
    delay: 2.3,
    overflow: "visible",
  });
}

// Desktop
if (window.innerWidth > 1200) {
  const scrollToTop = document.querySelector(".scroll-to-top");

  loadingNameEnterTL
    .from(loadingFirstName, {
      duration: 1.5,
      y: 26,
      ease: Expo.easeInOut,
    })
    .to([loadingCoverTop], {
      duration: 0.5,
      y: -100,
      ease: Expo.ease,
    });

  gsap.from(loadingLastName, {
    duration: 1.5,
    y: -25,
    ease: Expo.easeInOut,
  });

  // Loading Text (Name) - Exit
  const loadingNameTL = gsap.timeline();

  loadingNameTL.to([loadingFirstName, loadingLastName], {
    duration: 0.8,
    delay: 1.5,
    ease: Expo.easeInOut,
    y: -25,
  });

  // Loading Screen Exit
  loadingScreenTL
    .to([loadingScreen, loadingIntro], {
      duration: 0.8,
      delay: 1.5,
      top: "-110%",
      ease: Expo.easeInOut,
    })
    .from(
      [header, navLink],
      {
        y: 16,
        opacity: 0,
        duration: 0.25,
        ease: "power3.inOut",
      },
      "-=.4"
    )
    .from(
      [
        nameHeader,
        aboutContentP,
        aboutSubheading,
        aboutLineBreak,
        listItems,
        scrollToTop,
      ],
      {
        delay: 0,
        y: 16,
        opacity: 0,
        duration: 0.25,
        ease: '"power3.out"',
      },
      "-=.1"
    );

  //////////////////////////////////////////////////////////////////////////////
  // Footer

  const footerTL = gsap.timeline();
  const footer = document.querySelector(".footer");
  const controller = new ScrollMagic.Controller();

  footerTL.from(footer, {
    duration: 0.8,
    opacity: 0,
    ease: Expo.out,
  });

  new ScrollMagic.Scene({
    triggerElement: "#footerScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(footerTL)
    .addTo(controller);

  gsap.to(bodyContainer, {
    duration: 0,
    delay: 2.3,
    overflow: "visible",
  });
}

//////////////////////////////////////////////////////////////////////////////
// Easter Eggs Hint

// const easterEggsHintText = document.querySelector(".easter-eggs-hint--text");

easterEggsHint.addEventListener("mouseover", () => {
  easterEggsHintText.classList.add("open");
});
easterEggsHint.addEventListener("mouseleave", () => {
  easterEggsHintText.classList.remove("open");
});
