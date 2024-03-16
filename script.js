"use strict";
const tabsContainer = document.querySelector(".operations__tab-container");
const tabButtons = document.querySelectorAll(".btn");
const tabContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  // Clicked button
  const clicked = e.target.closest(".btn");

  if (!clicked) return;

  // Active button
  tabButtons.forEach((btn) => {
    btn.classList.remove("operations__tab--active");
  });

  clicked.classList.add("operations__tab--active");

  // Active content
  tabContent.forEach((content) => {
    content.classList.remove("operations__content--active");
  });
  document
    .querySelector(`.operations__content--${clicked.dataset.id}`)
    .classList.add("operations__content--active");
});
