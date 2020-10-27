"use strict";

const btnShare = document.querySelector(".collapsableShare__btn");
const twitterCollapsable = document.querySelector(
  ".collapsableShare__createLink"
);

/* function createCard() {
  showLink();
  sendRequest();
} */

function showLink() {
  btnShare.classList.add("btnClick");
  twitterCollapsable.classList.remove("hideCollapsable");
}

btnShare.addEventListener("click", sendRequest);
