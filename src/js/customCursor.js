//Custom Cursor
const link = document.querySelectorAll(".hover-this");
const linkViewProject = document.querySelectorAll(".hover-view-project");
const linkBig = document.querySelectorAll(".hover-this-big");

let cursor = document.querySelector(".cursor"); // The small one
let cursor2 = document.querySelector(".cursor-2"); // The large one
let cursorText = document.querySelector(".cursor-view-project-text");

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

// Cursor animations or View Project inks
linkViewProject.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("animate-cursor-view-project");
    cursor2.classList.add("animate-cursor-2");
    cursorText.classList.add("cursor-view-project-text-active");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("animate-cursor-view-project");
    cursor2.classList.remove("animate-cursor-2");
    cursorText.classList.remove("cursor-view-project-text-active");
  });
});

// Cursor animations for footer email

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

const fullNameText = document.querySelector(".hover-text-full-name");
const text1 = document.querySelector(".hover-text-1");
const text2 = document.querySelector(".hover-text-2");
const youSmartGif = document.querySelector(".you-smart-gif");
const troyAbedHandshakeGif = document.querySelector(".troy-abed-handshake-gif");
const profilePic = document.querySelector(".profile-pic__container");

// Cursor animations for you smart gif & profile pic
if (location.pathname === "/src/about.html") {
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

  // Cursor animations for full name hover
  fullNameText.addEventListener("mouseover", () => {
    cursor.classList.add("animate-cursor-gif");
    cursor2.classList.add("animate-cursor-2");
    profilePic.classList.add("gif-active");
  });

  fullNameText.addEventListener("mouseleave", () => {
    cursor.classList.remove("animate-cursor-gif");
    cursor2.classList.remove("animate-cursor-2");
    profilePic.classList.remove("gif-active");
  });
}

//////////////////////////////////////////////////////////////////
//Hamburger Menu
const hamburgerMenuContainer = document.querySelector(
  ".home__hamburger-btn__container"
);
const hamburgerBtn = document.querySelector(".home__hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector(".container");

hamburgerMenuContainer.addEventListener("click", () => {
  console.log("click");
  hamburgerBtn.classList.toggle("animate-btn");
  mobileMenu.classList.toggle("open");
  body.classList.toggle("scroll-lock");
});
