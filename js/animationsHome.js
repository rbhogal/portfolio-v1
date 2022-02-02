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

// For mobile
if (window.innerWidth <= 1200) {
  const projectsHeading = document.querySelector(".projects__heading");
  const projectCard01 = document.querySelector(".projects__card--01");
  const projectCard02 = document.querySelector(".projects__card--02");
  const projectCard03 = document.querySelector(".projects__card--03");
  const projectCard04 = document.querySelector(".projects__card--04");

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.75,
      delay: 0.75,
      top: "-110%",
      ease: Expo.easeInOut,
    })
    .from(
      projectsHeading,
      {
        // delay: -0.1,
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: '"power3.out"',
      },
      "-=.1"
    )
    .from(
      [projectCard01, projectCard02, projectCard03, projectCard04],
      {
        // delay: -0.6,
        opacity: 0,
        duration: 0.8,
        ease: '"power3.out"',
        stagger: 0.2,
      },
      "-=0.6"
    );

  // Footer
  const footerTL = gsap.timeline();
  const footer = document.querySelector(".footer");

  footerTL.from(footer, {
    delay: -0.7,
    duration: 0.8,
    opacity: 0,
    ease: Expo.out,
  });

  const controller2 = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#footerMobileTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(footerTL)
    .addTo(controller2);
}

// For Desktop
if (window.innerWidth > 1200) {
  const projectsHeading = document.querySelector(".projects__heading");
  const projectCard01 = document.querySelector(".projects__card--01");
  const projectCard02 = document.querySelector(".projects__card--02");
  const projectCard03 = document.querySelector(".projects__card--03");
  const projectCard04 = document.querySelector(".projects__card--04");

  const projectCard01Heading = document.querySelector(
    ".projects__card__headings--01"
  );
  const projectCard01Subheading = document.querySelector(
    ".projects__card__subheading--01"
  );
  const projectCard02Heading = document.querySelector(
    ".projects__card__headings--02"
  );
  const projectCard02Subheading = document.querySelector(
    ".projects__card__subheading--02"
  );
  const projectCard03Heading = document.querySelector(
    ".projects__card__headings--03"
  );
  const projectCard03Subheading = document.querySelector(
    ".projects__card__subheading--03"
  );
  const projectCard04Heading = document.querySelector(
    ".projects__card__headings--04"
  );
  const projectCard04Subheading = document.querySelector(
    ".projects__card__subheading--04"
  );

  const scrollToTopBtn = document.querySelector(".scroll-to-top");

  loadingScreenTL
    .to(loadingScreen, {
      duration: 0.25,
      delay: 0.25,
      top: "-110%",
      ease: Expo.easeInOut,
    })
    .from([header, navLink], {
      delay: -0.1,
      y: 16,
      opacity: 0,
      duration: 0.25,
      ease: "power3.inOut",
    })
    .from(projectsHeading, {
      delay: -0.1,
      y: 60,
      opacity: 0,
      duration: 0.25,
      ease: '"power3.out"',
    })
    .from([projectCard01, projectCard02], {
      delay: 0,
      opacity: 0,
      duration: 0.1,
      ease: '"power3.out"',
      stagger: 0.25,
    })
    .from(
      [
        projectCard01Heading,
        projectCard01Subheading,
        projectCard02Heading,
        projectCard02Subheading,
        scrollToTopBtn,
      ],
      {
        delay: 0,
        y: 16,
        opacity: 0,
        duration: 0.25,
        ease: '"power3.out"',
        stagger: 0.1,
      }
    );

  ////////////////////////////////////////////////////////////////////////////////
  // Project 3
  const project3TL = gsap.timeline();

  project3TL
    .from(projectCard03, {
      opacity: 0,
      duration: 0.1,
      ease: '"power3.out"',
      stagger: 0.2,
    })
    .from([projectCard03Heading, projectCard03Subheading], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.25,
      ease: '"power3.out"',
      stagger: 0.1,
    });

  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#project3Trigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(project3TL)
    .addTo(controller);

  ////////////////////////////////////////////////////////////////////////////////
  // Project 4
  const project4TL = gsap.timeline();

  project4TL
    .from(projectCard04, {
      opacity: 0,
      duration: 0.1,
      ease: '"power3.out"',
      stagger: 0.2,
    })
    .from([projectCard04Heading, projectCard04Subheading], {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.25,
      ease: '"power3.out"',
      stagger: 0.1,
    });

  new ScrollMagic.Scene({
    triggerElement: "#project4Trigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(project4TL)
    .addTo(controller);

  // Footer
  const footerTL = gsap.timeline();
  const footer = document.querySelector(".footer");

  footerTL.from(footer, {
    delay: -0.7,
    duration: 0.8,
    opacity: 0,
    ease: Expo.out,
  });

  const controller2 = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#footerTrigger",
    triggerHook: 0,
    reverse: false,
  })
    .setTween(footerTL)
    .addTo(controller2);
}
