"use strict";
console.log("Hola mundo");

const arrow = document.querySelectorAll(".js-button");
const collapsable = document.querySelector(".js-mainCollapsable");

function getCollapsable(event) {
  event.currentTarget.classList.toggle("changeArrow");
  collapsable.classList.toggle("hideCollapsable");
  console.log(event.currentTarget);
}

// for (let i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", getCollapsable);
// }

// ---------- ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ESTO FUNCIONA Y NO SE QUITA!!!!!!!!!!!! --------------
