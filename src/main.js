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

// FIRST ACCORDION 1
let accordionOpener = document.querySelector("#accordionBtn");
let wrapper = document.querySelector("#wrapper");
let chevronTick = document.querySelector("#chevronOne");

accordionOpener.onclick = () => {
  wrapper.classList.toggle("is-open");
  chevronTick.classList.toggle("enabled");
};

// SECOND ACCORDION 2
let accordionOpenerTwo = document.querySelector("#accordionBtnTwo");
let wrapperTwo = document.querySelector("#wrapperTwo");
let chevronTickTwo = document.querySelector("#chevronTwo");

accordionOpenerTwo.onclick = () => {
  wrapperTwo.classList.toggle("is-open");
  chevronTickTwo.classList.toggle("enabled");
};

// THIRD ACCORDION 3
let accordionOpenerThree = document.querySelector("#accordionBtnThree");
let wrapperThree = document.querySelector("#wrapperThree");
let chevronTickThree = document.querySelector("#chevronThree");

accordionOpenerThree.onclick = () => {
  wrapperThree.classList.toggle("is-open");
  chevronTickThree.classList.toggle("enabled");
};

// FOURTH ACCORDION 4
let accordionOpenerFour = document.querySelector("#accordionBtnFour");
let wrapperFour = document.querySelector("#wrapperFour");
let chevronTickFour = document.querySelector("#chevronFour");

accordionOpenerFour.onclick = () => {
  wrapperFour.classList.toggle("is-open");
  chevronTickFour.classList.toggle("enabled");
};

// FIFTH ACCORDION 5
let accordionOpenerFive = document.querySelector("#accordionBtnFive");
let wrapperFive = document.querySelector("#wrapperFive");
let chevronTickFive = document.querySelector("#chevronFive");

accordionOpenerFive.onclick = () => {
  wrapperFive.classList.toggle("is-open");
  chevronTickFive.classList.toggle("enabled");
};
