const menu_btn = document.querySelector("#menu-toggle");
const mobile_menu = document.querySelector(".mobile-nav");
const overlayOne = document.querySelector("body");

menu_btn.onclick = () => {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("in-action");
  nextMenu.classList.remove("in-action"); //genius
  overlayOne.classList.toggle("active");
};

const nextButton = document.querySelector("#nextButton");
const backButton = document.querySelector("#backButton");
const nextMenu = document.querySelector(".next-menu");

nextButton.onclick = () => {
  nextMenu.classList.toggle("in-action");
};

backButton.onclick = () => {
  nextMenu.classList.remove("in-action");
};
