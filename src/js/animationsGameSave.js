// Loading Screen
const loadingScreen = document.querySelector(".loading-screen");
const loadingScreenAddition = document.querySelector(
  ".loading-screen-addition"
);
const bodyContainer = document.querySelector(".container");

// Header
const header = document.querySelector(".home__header");
const navLink = document.querySelectorAll(".nav__link");

const loadingScreenTL = gsap.timeline();

gsap.to(bodyContainer, {
  duration: 0,
  delay: 1.5,
  overflow: "visible",
});

//////////////////////////////////////////////////////////////////////////////////
// Project Game Save

// For Mobile
if (window.innerWidth <= 1200) {
  const projectGameSaveHeading = document.querySelector(
    ".project__game-save__heading"
  );
  const projectGameSaveHeader = document.querySelector(
    ".project__game-save__header"
  );
  const projectGameSaveContentP = document.querySelectorAll(
    ".project__game-save__content p"
  );
  const projectGameSaveBanner = document.querySelector(
    ".project__game-save__banner"
  );
  const projectBtns = document.querySelectorAll(".project__game-save__btn");

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.75,
      delay: 0.75,
      top: "-110%",
      ease: Expo.easeInOut,
    })

    .from([projectGameSaveHeading, projectGameSaveContentP], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.8,
      ease: '"power3.out"',
      stagger: 0.1,
    })
    .from(
      projectBtns,
      {
        delay: 0,
        y: 16,
        opacity: 0,
        duration: 0.8,
        ease: '"power3.out"',
        stagger: 0.1,
      },
      "-=1.9"
    )
    .from(
      projectGameSaveBanner,
      {
        y: 30,
        opacity: 0,
        duration: 3,
        ease: '"power3.out"',
      },
      "-=1.5"
    );

  ///////////////////////////////////////////////////////////////////////////////
  // Search Games
  const searchGamesTL = gsap.timeline();
  const searchGames = document.querySelector(
    ".project__game-save__search-showcase"
  );

  searchGamesTL.from(searchGames, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#searchGamesTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(searchGamesTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // View Game Info

  const viewGameInfoTL = gsap.timeline();
  const viewGameInfo = document.querySelector(
    ".project__game-save__view-game-info-showcase__container"
  );

  viewGameInfoTL.from(viewGameInfo, {
    delay: 0,
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#viewGameInfoTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(viewGameInfoTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Authentication

  const authTL = gsap.timeline();
  const auth = document.querySelector(".project__game-save__auth-showcase");

  authTL.from(auth, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#authTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(authTL)
    .addTo(controller);

  //////////////////////////////////////////////////////////////////////////////
  // Mobile Friendly

  const mobileFriendlyTL = gsap.timeline();
  const mobileFriendly = document.querySelector(
    ".project__game-save__mobile-friendly-showcase"
  );

  mobileFriendlyTL.from(mobileFriendly, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#mobileFriendlyTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(mobileFriendlyTL)
    .addTo(controller);

  //////////////////////////////////////////////////////////////////////////////
  // Challenges

  const challengesTL = gsap.timeline();
  const challenges = document.querySelector(
    ".project__game-save__challenges-showcase"
  );

  challengesTL.from(challenges, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#challengesTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(challengesTL)
    .addTo(controller);

  //////////////////////////////////////////////////////////////////////////////
  // Tech & Next Project

  const techTL = gsap.timeline();
  const tech = document.querySelector(".project__game-save__tech-showcase");
  const nextProject = document.querySelector(".project__game-save__prev-next");

  techTL.from([tech, nextProject], {
    delay: 0,
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
    stagger: 0.5,
  });

  new ScrollMagic.Scene({
    triggerElement: "#techTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(techTL)
    .addTo(controller);

  //////////////////////////////////////////////////////////////////////////////
  // Footer

  const footerTL = gsap.timeline();
  const footer = document.querySelector(".footer");

  footerTL.from(footer, {
    duration: 0.8,
    opacity: 0,
    ease: Expo.out,
  });

  new ScrollMagic.Scene({
    triggerElement: "#footerTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(footerTL)
    .addTo(controller);
}

if (window.innerWidth > 1200) {
  const projectGameSaveHeading = document.querySelector(
    ".project__game-save__heading"
  );
  const projectGameSaveHeader = document.querySelector(
    ".project__game-save__header"
  );
  const projectGameSaveContentP = document.querySelectorAll(
    ".project__game-save__content p"
  );
  const projectGameSaveBanner = document.querySelector(
    ".project__game-save__banner"
  );
  const projectBtns = document.querySelectorAll(".project__game-save__btn");

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.75,
      delay: 0.75,
      top: "-110%",
      ease: Expo.easeInOut,
    })
    .from([header, navLink], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
    })
    .from(projectGameSaveHeader, {
      delay: 0,
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: '"power3.out"',
    })
    .from([projectGameSaveHeading, projectGameSaveContentP], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.8,
      ease: '"power3.out"',
      stagger: 0.1,
    })
    .from(
      projectBtns,
      {
        delay: 0,
        y: 16,
        opacity: 0,
        duration: 0.8,
        ease: '"power3.out"',
        stagger: 0.1,
      },
      "-=1.9"
    )
    .from(
      projectGameSaveBanner,
      {
        y: 30,
        opacity: 0,
        duration: 3,
        ease: '"power3.out"',
      },
      "-=1.5"
    );

  ///////////////////////////////////////////////////////////////////////////////
  // Search Games
  const searchGamesTL = gsap.timeline();
  const searchGames = document.querySelector(
    ".project__game-save__search-showcase"
  );

  searchGamesTL.from(searchGames, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#searchGamesTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(searchGamesTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // View Game Info

  const viewGameInfoTL = gsap.timeline();
  const viewGameInfo = document.querySelector(
    ".project__game-save__view-game-info-showcase__container"
  );

  viewGameInfoTL.from(viewGameInfo, {
    delay: 0,
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#viewGameInfoTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(viewGameInfoTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Authentication

  const authTL = gsap.timeline();
  const auth = document.querySelector(".project__game-save__auth-showcase");

  authTL.from(auth, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#authTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(authTL)
    .addTo(controller);

  //////////////////////////////////////////////////////////////////////////////
  // Mobile Friendly

  const mobileFriendlyTL = gsap.timeline();
  const mobileFriendly = document.querySelector(
    ".project__game-save__mobile-friendly-showcase"
  );

  mobileFriendlyTL.from(mobileFriendly, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#mobileFriendlyTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(mobileFriendlyTL)
    .addTo(controller);

  //////////////////////////////////////////////////////////////////////////////
  // Challenges

  const challengesTL = gsap.timeline();
  const challenges = document.querySelector(
    ".project__game-save__challenges-showcase"
  );

  challengesTL.from(challenges, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#challengesTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(challengesTL)
    .addTo(controller);

  //////////////////////////////////////////////////////////////////////////////
  // Tech & Next Project

  const techTL = gsap.timeline();
  const tech = document.querySelector(".project__game-save__tech-showcase");
  const nextProject = document.querySelector(".project__game-save__prev-next");

  techTL.from([tech, nextProject], {
    delay: 0,
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
    stagger: 0.5,
  });

  new ScrollMagic.Scene({
    triggerElement: "#techTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(techTL)
    .addTo(controller);

  //////////////////////////////////////////////////////////////////////////////
  // Footer

  const footerTL = gsap.timeline();
  const footer = document.querySelector(".footer");

  footerTL.from(footer, {
    duration: 0.8,
    opacity: 0,
    ease: Expo.out,
  });

  new ScrollMagic.Scene({
    triggerElement: "#footerTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(footerTL)
    .addTo(controller);
}
