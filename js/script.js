"use strict";
const headerEl = document.querySelector(".header");
const navEl = document.querySelector(".nav");
const bgOverlayEl = document.querySelector(".bg-overlay");
const mobileNavBtnBlackEl = document.querySelector(".mobile-nav-btn--black");
const mobileNavBtnWhiteEl = document.querySelector(".mobile-nav-btn--white");
const bodyEl = document.querySelector("body");
const htmlEl = document.querySelector("html");

const openNavF = function () {
  headerEl.classList.add("open-nav");
  bodyEl.classList.add("no-scroll");
  htmlEl.classList.add("no-scroll");
};

const closeNavF = function () {
  headerEl.classList.remove("open-nav");
  bodyEl.classList.remove("no-scroll");
  htmlEl.classList.remove("no-scroll");
};

mobileNavBtnBlackEl.addEventListener("click", openNavF);
mobileNavBtnWhiteEl.addEventListener("click", closeNavF);
bgOverlayEl.addEventListener("click", closeNavF);
