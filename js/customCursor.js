//Custom Cursor
const link = document.querySelectorAll(".hover-this");
const linkViewSite = document.querySelectorAll(".hover-view-site");
const linkViewDemo = document.querySelectorAll(".hover-view-demo");
const linkBig = document.querySelectorAll(".hover-this-big");

let cursor = document.querySelector(".cursor"); // The small one
let cursor2 = document.querySelector(".cursor-2"); // The large one
let cursorText = document.querySelector(".cursor-view-site-text");
let cursorTextDemo = document.querySelector(".cursor-view-demo-text");

let currentX = 0;
let currentY = 0;
let currentX2 = 0;
let currentY2 = 0;

let aimX = 0;
let aimY = 0;
let speed = 0.2;
let speed2 = 0.1;

const editCursor = (e) => {
  const { clientX: x, clientY: y } = e;
  aimX = x;
  aimY = y;
};

const trailEffect = (e) => {
  currentX += (aimX - currentX) * speed;
  currentY += (aimY - currentY) * speed;

  currentX2 += (aimX - currentX2) * speed2;
  currentY2 += (aimY - currentY2) * speed2;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  cursor2.style.left = currentX2 + "px";
  cursor2.style.top = currentY2 + "px";

  requestAnimationFrame(trailEffect);
};

trailEffect();

// Mobile (disable custom cursors)
if (window.innerWidth <= 540) {
  cursor.style.display = "none";
  cursor2.style.display = "none";
}

/* 
// Regular Cursor Movement
const editCursor = (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor2.style.left = x + "px";
  cursor2.style.top = y + "px";
};
*/

window.addEventListener("mousemove", editCursor);
window.addEventListener("mousedown", () => {
  cursor.classList.add("animate-cursor");
  cursor2.classList.add("animate-cursor-2");
});
window.addEventListener("mouseup", () => {
  cursor.classList.remove("animate-cursor");
  cursor2.classList.remove("animate-cursor-2");
});

// Cursor animations for nav links
link.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("animate-cursor");
    cursor2.classList.add("animate-cursor-2");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("animate-cursor");
    cursor2.classList.remove("animate-cursor-2");
  });
});

linkViewSite.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("animate-cursor-view-site");
    cursor2.classList.add("animate-cursor-2");
    cursorText.classList.add("cursor-view-site-text-active");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("animate-cursor-view-site");
    cursor2.classList.remove("animate-cursor-2");
    cursorText.classList.remove("cursor-view-site-text-active");
  });
});

linkViewDemo.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("animate-cursor-view-demo");
    cursor2.classList.add("animate-cursor-2");
    cursorTextDemo.classList.add("cursor-view-demo-text-active");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("animate-cursor-view-demo");
    cursor2.classList.remove("animate-cursor-2");
    cursorTextDemo.classList.remove("cursor-view-demo-text-active");
  });
});

// Cursor animations for BIG Cursor - footer email & next project link

linkBig.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("animate-cursor-big");
    cursor2.classList.add("animate-cursor-2");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("animate-cursor-big");
    cursor2.classList.remove("animate-cursor-2");
  });
});

const textWaveEmoji = document.querySelectorAll(".hover-text-wave");
const text1 = document.querySelector(".hover-text-1");
const text2 = document.querySelector(".hover-text-2");
const youSmartGif = document.querySelector(".you-smart-gif");
const callMeGif = document.querySelector(".call-me-gif");
const troyAbedHandshakeGif = document.querySelector(".troy-abed-handshake-gif");
const profilePic = document.querySelector(".profile-pic__container");

// Cursor animations for you smart gif & profile pic

if (location.pathname === "/about.html") {
  text1.addEventListener("mouseover", () => {
    cursor.classList.add("animate-cursor-gif");
    cursor2.classList.add("animate-cursor-2");
    youSmartGif.classList.add("gif-active");
  });

  text1.addEventListener("mouseleave", () => {
    cursor.classList.remove("animate-cursor-gif");
    cursor2.classList.remove("animate-cursor-2");
    youSmartGif.classList.remove("gif-active");
  });

  // Cursor animations for troy and abed gif
  text2.addEventListener("mouseover", () => {
    cursor.classList.add("animate-cursor-gif");
    cursor2.classList.add("animate-cursor-2");
    troyAbedHandshakeGif.classList.add("gif-active");
  });
  text2.addEventListener("mouseleave", () => {
    cursor.classList.remove("animate-cursor-gif");

    cursor2.classList.remove("animate-cursor-2");
    troyAbedHandshakeGif.classList.remove("gif-active");
  });

  // Cursor animations for waving emoji

  textWaveEmoji.forEach((textBox) => {
    textBox.addEventListener("mouseover", () => {
      cursor.classList.add("animate-cursor-gif");
      cursor2.classList.add("animate-cursor-2");
      profilePic.classList.add("gif-active");
    });

    textBox.addEventListener("mouseleave", () => {
      cursor.classList.remove("animate-cursor-gif");
      cursor2.classList.remove("animate-cursor-2");
      profilePic.classList.remove("gif-active");
    });
  });
}

//////////////////////////////////////////////////////////////////
//Hamburger Menu

const hamburgerMenuContainer = document.querySelector(
  ".header__hamburger-btn__container"
);
const hamburgerBtn = document.querySelector(".header__hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector(".container");

const mobileMenuTL = gsap.timeline();
const mobileLink1 = document.querySelector(".mobile-menu__link--about");
const mobileLink2 = document.querySelector(".mobile-menu__link--projects");

const scrollLock = () => {
  gsap.to(body, {
    overflow: "hidden",
  });
};

const scrollUnlock = () => {
  gsap.to(body, {
    overflow: "visible",
  });
};

hamburgerMenuContainer.addEventListener("click", () => {
  // Close
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");

    hamburgerBtn.classList.toggle("animate-btn");
    mobileMenu.classList.add("animate-menu-up");
    body.classList.remove("scroll-lock");

    // mobileLink1.classList.remove("fade-in-links--about");
    // mobileLink2.classList.remove("fade-in-links--projects");
    scrollUnlock();

    return;
  }

  // Open
  hamburgerBtn.classList.toggle("animate-btn");
  mobileMenu.classList.add("open");
  body.classList.add("scroll-lock");
  mobileMenu.classList.remove("animate-menu-up");
  mobileMenu.classList.add("animate-menu-down");

  // mobileLink1.classList.add("fade-in-links--about");
  // mobileLink2.classList.add("fade-in-links--projects");
  scrollLock();
});
