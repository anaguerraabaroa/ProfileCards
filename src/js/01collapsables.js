"use strict";

const arrowList = document.querySelectorAll(".js-button");

// Rotate each arrow & show/hide each collapsable section on click
function getCollapsable(event) {
  event.currentTarget.classList.toggle("rotateArrow");

  const arrowId = event.currentTarget.id;
  const section = document.querySelector(".section-" + arrowId);
  section.classList.toggle("hideCollapsable");
}

// Arrows listener
for (let i = 0; i < arrowList.length; i++) {
  arrowList[i].addEventListener("click", getCollapsable);
}
