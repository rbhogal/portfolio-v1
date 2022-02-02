// Loading Screen
const loadingScreen = document.querySelector(".loading-screen");
const loadingScreenAddition = document.querySelector(
  ".loading-screen-addition"
);
const bodyContainer = document.querySelector(".container");

// Header
const header = document.querySelector(".home__header");
const navLink = document.querySelectorAll(".nav__link");

const scrollToTopBtn = document.querySelector(".scroll-to-top");

const loadingScreenTL = gsap.timeline();

gsap.to(bodyContainer, {
  duration: 0,
  delay: 1.5,
  overflow: "visible",
});

// For mobile
if (window.innerWidth <= 1200) {
  const projectStanzaHeading = document.querySelector(
    ".project__stanza__heading"
  );
  const projectStanzaContentP = document.querySelectorAll(
    ".project__stanza__content p"
  );
  const projectStanzaBanner = document.querySelector(
    ".project__stanza__banner"
  );

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.75,
      delay: 0.75,
      top: "-110%",
      ease: Expo.easeInOut,
    })
    .from([projectStanzaHeading, projectStanzaContentP], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.8,
      ease: '"power3.out"',
      stagger: 0.1,
    })
    .from(
      projectStanzaBanner,
      {
        y: 30,
        opacity: 0,
        duration: 3,
        ease: '"power3.out"',
      },
      "-=1.8"
    );

  ////////////////////////////////////////////////////////////////////////////////
  // Dashboard Analytics
  const dashboardTL = gsap.timeline();
  const dashboardAnalytics = document.querySelector(
    ".project__stanza__dashboard-analytics-showcase"
  );

  dashboardTL.from(dashboardAnalytics, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#dashboardTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(dashboardTL)
    .addTo(controller);

  ////////////////////////////////////////////////////////////////////////////////
  // Add Lyrics
  const addLyricsTL = gsap.timeline();
  const addLyrics = document.querySelector(
    ".project__stanza__add-lyrics-showcase__container"
  );

  addLyricsTL.from(addLyrics, {
    delay: 0,
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#addLyricsTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(addLyricsTL)
    .addTo(controller);

  ////////////////////////////////////////////////////////////////////////////////
  // Challenges

  const challengesTL = gsap.timeline();
  const challenges = document.querySelector(
    ".project__stanza__challenges-showcase"
  );

  challengesTL.from(challenges, {
    delay: 0,
    x: -100,
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

  ////////////////////////////////////////////////////////////////////////////////
  // Challenges

  const techTL = gsap.timeline();
  const tech = document.querySelector(".project__stanza__tech-showcase");
  const nextProject = document.querySelector(".project__stanza__prev-next");

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

// For Desktop
if (window.innerWidth > 1200) {
  const projectStanzaHeader = document.querySelector(
    ".project__stanza__header"
  );
  const projectStanzaHeading = document.querySelector(
    ".project__stanza__heading"
  );
  const projectStanzaContentP = document.querySelectorAll(
    ".project__stanza__content p"
  );
  const projectStanzaBanner = document.querySelector(
    ".project__stanza__banner"
  );

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.25,
      delay: 0.25,
      top: "-100%",
      ease: Expo.easeInOut,
    })
    .from([header, navLink], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.25,
      ease: "power3.inOut",
    })
    .from(projectStanzaHeader, {
      delay: 0,
      y: 60,
      opacity: 0,
      duration: 0.25,
      ease: '"power3.out"',
    })
    .from([projectStanzaHeading, scrollToTopBtn, projectStanzaContentP], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.25,
      ease: '"power3.out"',
      stagger: 0.1,
    })
    .from(
      projectStanzaBanner,
      {
        y: 30,
        opacity: 0,
        duration: 0.25,
        ease: '"power3.out"',
      },
      "-=1.8"
    );

  ////////////////////////////////////////////////////////////////////////////////
  // Dashboard Analytics
  const dashboardTL = gsap.timeline();
  const dashboardAnalytics = document.querySelector(
    ".project__stanza__dashboard-analytics-showcase"
  );

  dashboardTL.from(dashboardAnalytics, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#dashboardTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(dashboardTL)
    .addTo(controller);

  ////////////////////////////////////////////////////////////////////////////////
  // Add Lyrics
  const addLyricsTL = gsap.timeline();
  const addLyrics = document.querySelector(
    ".project__stanza__add-lyrics-showcase__container"
  );

  addLyricsTL.from(addLyrics, {
    delay: 0,
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#addLyricsTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(addLyricsTL)
    .addTo(controller);

  ////////////////////////////////////////////////////////////////////////////////
  // Challenges

  const challengesTL = gsap.timeline();
  const challenges = document.querySelector(
    ".project__stanza__challenges-showcase"
  );

  challengesTL.from(challenges, {
    delay: 0,
    x: -100,
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

  ////////////////////////////////////////////////////////////////////////////////
  // Tech & Next Project

  const techTL = gsap.timeline();
  const tech = document.querySelector(".project__stanza__tech-showcase");
  const nextProject = document.querySelector(".project__stanza__prev-next");

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
