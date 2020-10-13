"use strict";

console.log("Hola mundo 2");

const nameForm = document.querySelector(".js-nameForm");
const nameCard = document.querySelector(".js-nameCard");
const positionForm = document.querySelector(".js-positionForm");

const positionCard = document.querySelector(".js-positionCard");
const emailForm = document;

function addName() {
  let nameValue = nameForm.value;
  nameCard.innerHTML = nameValue;
}

nameForm.addEventListener("keydown", addName);

function addPosition() {
  let positionValue = positionForm.value;
  positionCard.innerHTML = positionValue;
}

positionForm.addEventListener("keydown", addPosition);
