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
// Project Bookmark

// For Mobile
if (window.innerWidth <= 1200) {
  const projectBookmarkHeading = document.querySelector(
    ".project__bookmark__heading"
  );
  const projectBookmarkHeader = document.querySelector(
    ".project__bookmark__header"
  );
  const projectBookmarkContentP = document.querySelectorAll(
    ".project__bookmark__content p"
  );
  const projectBookmarkBanner = document.querySelector(
    ".project__bookmark__banner"
  );
  const projectBtns = document.querySelectorAll(".project__bookmark__btn");

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.75,
      delay: 0.75,
      top: "-100%",
      ease: Expo.easeInOut,
    })
    .from([projectBookmarkHeading, projectBookmarkContentP], {
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
      projectBookmarkBanner,
      {
        y: 30,
        opacity: 0,
        duration: 3,
        ease: '"power3.out"',
      },
      "-=1.5"
    );

  ///////////////////////////////////////////////////////////////////////////////
  // Hover and Button Effects

  const hoverEffectsTL = gsap.timeline();
  const hoverEffects = document.querySelector(
    ".project__bookmark__animations-showcase"
  );

  hoverEffectsTL.from(hoverEffects, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#hoverEffectsScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(hoverEffectsTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // CSS Grid / Flexbox

  const gridTL = gsap.timeline();
  const grid = document.querySelector(
    ".project__bookmark__grid-showcase__container"
  );

  gridTL.from(grid, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#gridScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(gridTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Feature Tabs

  const featureTabsTL = gsap.timeline();
  const featureTabs = document.querySelector(
    ".project__bookmark__features-showcase"
  );

  featureTabsTL.from(featureTabs, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#featureTabsScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(featureTabsTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // FAQ - Accordion

  const faqTL = gsap.timeline();
  const faq = document.querySelector(
    ".project__bookmark__FAQ-accordion-showcase"
  );

  faqTL.from(faq, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#faqScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(faqTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Email Validation

  const emailValidationTL = gsap.timeline();
  const emailValidation = document.querySelector(
    ".project__bookmark__email-validation-showcase__container"
  );

  emailValidationTL.from(emailValidation, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#emailValidationScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(emailValidationTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Mobile Friendly

  const mobileFriendlyTL = gsap.timeline();
  const mobileFriendly = document.querySelector(
    ".project__bookmark__mobile-friendly-showcase"
  );

  mobileFriendlyTL.from(mobileFriendly, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#mobileFriendlyScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(mobileFriendlyTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Challenges

  const challengesTL = gsap.timeline();
  const challenges = document.querySelector(
    ".project__bookmark__challenges-showcase"
  );

  challengesTL.from(challenges, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#challengesScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(challengesTL)
    .addTo(controller);

  // Tech & Next Project

  const techTL = gsap.timeline();
  const tech = document.querySelector(".project__bookmark__tech-showcase");
  const nextProject = document.querySelector(".project__bookmark__prev-next");

  techTL.from([tech, nextProject], {
    delay: 0,
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
    stagger: 0.5,
  });

  new ScrollMagic.Scene({
    triggerElement: "#techScrollTrigger",
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
  const projectBookmarkHeading = document.querySelector(
    ".project__bookmark__heading"
  );
  const projectBookmarkHeader = document.querySelector(
    ".project__bookmark__header"
  );
  const projectBookmarkContentP = document.querySelectorAll(
    ".project__bookmark__content p"
  );
  const projectBookmarkBanner = document.querySelector(
    ".project__bookmark__banner"
  );
  const projectBtns = document.querySelectorAll(".project__bookmark__btn");

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.75,
      delay: 0.75,
      top: "-100%",
      ease: Expo.easeInOut,
    })
    .from([header, navLink], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
    })
    .from(projectBookmarkHeader, {
      delay: 0,
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: '"power3.out"',
    })
    .from([projectBookmarkHeading, projectBookmarkContentP], {
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
      projectBookmarkBanner,
      {
        y: 30,
        opacity: 0,
        duration: 3,
        ease: '"power3.out"',
      },
      "-=1.5"
    );

  ///////////////////////////////////////////////////////////////////////////////
  // Hover and Button Effects

  const hoverEffectsTL = gsap.timeline();
  const hoverEffects = document.querySelector(
    ".project__bookmark__animations-showcase"
  );

  hoverEffectsTL.from(hoverEffects, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#hoverEffectsScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(hoverEffectsTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // CSS Grid / Flexbox

  const gridTL = gsap.timeline();
  const grid = document.querySelector(
    ".project__bookmark__grid-showcase__container"
  );

  gridTL.from(grid, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#gridScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(gridTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Feature Tabs

  const featureTabsTL = gsap.timeline();
  const featureTabs = document.querySelector(
    ".project__bookmark__features-showcase"
  );

  featureTabsTL.from(featureTabs, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#featureTabsScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(featureTabsTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // FAQ - Accordion

  const faqTL = gsap.timeline();
  const faq = document.querySelector(
    ".project__bookmark__FAQ-accordion-showcase"
  );

  faqTL.from(faq, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#faqScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(faqTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Email Validation

  const emailValidationTL = gsap.timeline();
  const emailValidation = document.querySelector(
    ".project__bookmark__email-validation-showcase__container"
  );

  emailValidationTL.from(emailValidation, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#emailValidationScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(emailValidationTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Mobile Friendly

  const mobileFriendlyTL = gsap.timeline();
  const mobileFriendly = document.querySelector(
    ".project__bookmark__mobile-friendly-showcase"
  );

  mobileFriendlyTL.from(mobileFriendly, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#mobileFriendlyScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(mobileFriendlyTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Challenges

  const challengesTL = gsap.timeline();
  const challenges = document.querySelector(
    ".project__bookmark__challenges-showcase"
  );

  challengesTL.from(challenges, {
    delay: 0,
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#challengesScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(challengesTL)
    .addTo(controller);

  // Tech & Next Project

  const techTL = gsap.timeline();
  const tech = document.querySelector(".project__bookmark__tech-showcase");
  const nextProject = document.querySelector(".project__bookmark__prev-next");

  techTL.from([tech, nextProject], {
    delay: 0,
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
    stagger: 0.5,
  });

  new ScrollMagic.Scene({
    triggerElement: "#techScrollTrigger",
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
