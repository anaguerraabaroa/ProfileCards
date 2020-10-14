"use strict";
console.log("Hola mundo");

const arrow = document.querySelector(".js-button");
const collapsable = document.querySelector(".js-mainCollapsable");

function rotateArrow() {
  arrow.classList.toggle("changeArrow");
  collapsable.classList.toggle("showCollapsable");
  console.log("dentro");
}

arrow.addEventListener("click", rotateArrow);
