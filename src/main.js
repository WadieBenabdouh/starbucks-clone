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

//ACCORDION TRICK

// FIRST ACCORDION
let accordionOpener = document.querySelector("#accordionBtn");
let wrapper = document.querySelector("#wrapper");

accordionOpener.onclick = () => {
  wrapper.classList.toggle("is-open");
};

// SECOND ACCORDION
let accordionOpenerTwo = document.querySelector("#accordionBtnTwo");
let wrapperTwo = document.querySelector("#wrapperTwo");

accordionOpenerTwo.onclick = () => {
  wrapperTwo.classList.toggle("is-open");
};

// THIRD ACCORDION
let accordionOpenerThree = document.querySelector("#accordionBtnThree");
let wrapperThree = document.querySelector("#wrapperThree");

accordionOpenerThree.onclick = () => {
  wrapperThree.classList.toggle("is-open");
};

// FOURTH ACCORDION
let accordionOpenerFour = document.querySelector("#accordionBtnFour");
let wrapperFour = document.querySelector("#wrapperFour");

accordionOpenerFour.onclick = () => {
  wrapperFour.classList.toggle("is-open");
};

// FIFTH ACCORDION
let accordionOpenerFive = document.querySelector("#accordionBtnFive");
let wrapperFive = document.querySelector("#wrapperFive");

accordionOpenerFive.onclick = () => {
  wrapperFive.classList.toggle("is-open");
};
