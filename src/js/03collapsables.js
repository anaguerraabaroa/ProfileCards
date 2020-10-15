"use strict";
console.log("Hola mundo");

const arrow = document.querySelectorAll(".js-button");
const collapsable = document.querySelector(".js-mainCollapsable");

function rotateArrow(event) {
  event.currentTarget.classList.toggle("changeArrow");
  collapsable.classList.toggle("hideCollapsable");
  console.log(event.currentTarget);
}

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", rotateArrow);
}
