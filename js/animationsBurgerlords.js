// Loading Screen
const loadingScreen = document.querySelector(".loading-screen");
const loadingScreenAddition = document.querySelector(
  ".loading-screen-addition"
);
const bodyContainer = document.querySelector(".container");

// Header
const header = document.querySelector(".header");
const navLink = document.querySelectorAll(".nav__link");

const scrollToTopBtn = document.querySelector(".scroll-to-top");

const loadingScreenTL = gsap.timeline();

gsap.to(bodyContainer, {
  duration: 0,
  delay: 1.5,
  overflow: "visible",
});

//////////////////////////////////////////////////////////////////////////////////
// Project Burgerlords

// For Mobile
if (window.innerWidth <= 1200) {
  const projectBurgerlordsHeading = document.querySelector(
    ".project__burgerlords__heading"
  );
  const projectBurgerlordsContentP = document.querySelectorAll(
    ".project__burgerlords__content p"
  );
  const projectBurgerlordsBanner = document.querySelector(
    ".project__burgerlords__banner"
  );
  const projectBtns = document.querySelectorAll(".project__burgerlords__btn");

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.75,
      delay: 0.75,
      top: "-150%",
      ease: Expo.easeInOut,
    })
    .from([projectBurgerlordsHeading, projectBurgerlordsContentP], {
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
      projectBurgerlordsBanner,
      {
        y: 30,
        opacity: 0,
        duration: 3,
        ease: '"power3.out"',
      },
      "-=1.5"
    );

  ///////////////////////////////////////////////////////////////////////////////
  // CSS Animations
  const cssAnimationsTL = gsap.timeline();
  const cssAnimations = document.querySelector(
    ".project__burgerlords__animations-showcase"
  );

  cssAnimationsTL.from(cssAnimations, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#cssAnimationsScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(cssAnimationsTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Grid Layouts

  const gridTL = gsap.timeline();
  const grid = document.querySelector(
    ".project__burgerlords__grid-showcase__container"
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
  // Photo Gallery

  const photoGalleryTL = gsap.timeline();
  const photoGallery = document.querySelector(
    ".project__burgerlords__photo-gallery-showcase"
  );

  photoGalleryTL.from(photoGallery, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#photoGalleryScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(photoGalleryTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Mobile Friendly

  const mobileFriendlyTL = gsap.timeline();
  const mobileFriendly = document.querySelector(
    ".project__burgerlords__mobile-friendly-showcase"
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
    ".project__burgerlords__challenges-showcase"
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
  const tech = document.querySelector(".project__burgerlords__tech-showcase");
  const nextProject = document.querySelector(
    ".project__burgerlords__prev-next"
  );

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

// For Desktop
if (window.innerWidth > 1200) {
  const projectBurgerlordsHeading = document.querySelector(
    ".project__burgerlords__heading"
  );
  const projectBurgerlordsHeader = document.querySelector(
    ".project__burgerlords__header"
  );
  const projectBurgerlordsContentP = document.querySelectorAll(
    ".project__burgerlords__content p"
  );
  const projectBurgerlordsBanner = document.querySelector(
    ".project__burgerlords__banner"
  );
  const projectBtns = document.querySelectorAll(".project__burgerlords__btn");

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.25,
      delay: 0.25,
      top: "-150%",
      ease: Expo.easeInOut,
    })
    .from([header, navLink], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.25,
      ease: "power3.inOut",
    })
    .from(projectBurgerlordsHeader, {
      delay: 0,
      y: 60,
      opacity: 0,
      duration: 0.25,
      ease: '"power3.out"',
    })
    .from([projectBurgerlordsHeading, projectBurgerlordsContentP], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.25,
      ease: '"power3.out"',
      stagger: 0.1,
    })
    .from(
      [projectBtns, scrollToTopBtn],
      {
        delay: 0.5,
        y: 16,
        opacity: 0,
        duration: 0.25,
        ease: '"power3.out"',
        stagger: 0.1,
      },
      "-=1.9"
    )
    .from(
      projectBurgerlordsBanner,
      {
        y: 30,
        opacity: 0,
        duration: 0.25,
        ease: '"power3.out"',
      },
      "-=1.5"
    );

  ///////////////////////////////////////////////////////////////////////////////
  // CSS Animations
  const cssAnimationsTL = gsap.timeline();
  const cssAnimations = document.querySelector(
    ".project__burgerlords__animations-showcase"
  );

  cssAnimationsTL.from(cssAnimations, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#cssAnimationsScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(cssAnimationsTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Grid Layouts

  const gridTL = gsap.timeline();
  const grid = document.querySelector(
    ".project__burgerlords__grid-showcase__container"
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
  // Photo Gallery

  const photoGalleryTL = gsap.timeline();
  const photoGallery = document.querySelector(
    ".project__burgerlords__photo-gallery-showcase"
  );

  photoGalleryTL.from(photoGallery, {
    delay: 0,
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: '"power3.out"',
  });

  new ScrollMagic.Scene({
    triggerElement: "#photoGalleryScrollTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(photoGalleryTL)
    .addTo(controller);

  ///////////////////////////////////////////////////////////////////////////////
  // Mobile Friendly

  const mobileFriendlyTL = gsap.timeline();
  const mobileFriendly = document.querySelector(
    ".project__burgerlords__mobile-friendly-showcase"
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
    ".project__burgerlords__challenges-showcase"
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
  const tech = document.querySelector(".project__burgerlords__tech-showcase");
  const nextProject = document.querySelector(
    ".project__burgerlords__prev-next"
  );

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
