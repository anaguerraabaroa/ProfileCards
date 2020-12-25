"use strict";

const createCardbtn = document.querySelector(".js-createCard-btn"); // Create card button
const createCardCollapsable = document.querySelector(".js-createCard-link"); // Create card link collapsable
const shareCollapsableBorder = document.querySelector(".js-navShare"); // Share collapsable container

// Show/hide card link collapsable and change create card button colour
function showLink() {
  createCardbtn.classList.add("btnClick");
  createCardCollapsable.classList.remove("hideCollapsable");
}

// Create card button listener
createCardbtn.addEventListener("click", showLink);

// Hide share collapsable container border
function hideShareBorder() {
  shareCollapsableBorder.classList.toggle("hideLineShare");
}

// Share collapsable container listener
shareCollapsableBorder.addEventListener("click", hideShareBorder);
