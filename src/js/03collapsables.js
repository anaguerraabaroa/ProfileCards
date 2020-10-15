"use strict";
console.log("Hola mundo");

const arrow = document.querySelectorAll(".js-button");
const collapsable = document.querySelectorAll(".js-mainCollapsable");

function getCollapsable(event) {
  event.currentTarget.classList.toggle("changeArrow");
  if (arrow[0] === true) {
    collapsable[0].classList.toggle("hideCollapsable");
    // collapsable.classList.toggle("hideCollapsable");
    console.log(event.currentTarget);
  }
}

// ---------- ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ESTO FUNCIONA Y NO SE QUITA!!!!!!!!!!!! --------------
// function getCollapsable(event) {
//   event.currentTarget.classList.toggle("changeArrow");
//   collapsable.classList.toggle("hideCollapsable");
//     console.log(event.currentTarget);
//   }
// }

// for (let i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", getCollapsable);
// }
// ---------- ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ESTO FUNCIONA Y NO SE QUITA!!!!!!!!!!!! --------------
