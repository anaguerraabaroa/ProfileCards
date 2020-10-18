"use strict";
console.log("Hola mundo");

const arrowList = document.querySelectorAll(".js-button");

for (let i = 0; i < arrowList.length; i++) {
  arrowList[i].addEventListener("click", getCollapsable);
}

function getCollapsable(event) {
  const idArrow = event.currentTarget.id;
  console.log(".section-" + idArrow);

  const section = document.querySelector(".section-" + idArrow);
  section.classList.toggle("hideCollapsable");
}
