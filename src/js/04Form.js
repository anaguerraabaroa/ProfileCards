"use strict";

console.log("Hola mundo 2");

const inputList = document.querySelectorAll(".js-field"); //formulario
const nameCard = document.querySelector(".js-nameCard"); // tarjeta
const positionCard = document.querySelector(".js-positionCard"); // tarjeta
const tlCard = document.querySelector(".js-tlCard"); //tarjeta
const emailCard = document.querySelector(".js-emailCard"); //tarjeta
const linkedinCard = document.querySelector(".js-linkedinCard"); //tarjeta
const gitHubCard = document.querySelector(".js-gitHubCard"); //tarjeta

function saveField(event) {
  let fieldValue = event.currentTarget.value;
  nameCard.innerHTML = fieldValue;
  positionCard.innerHTML = fieldValue;
  emailCard.innerHTML = fieldValue;
  tlCard.innerHTML = fieldValue;
  linkedinCard.innerHTML = fieldValue;
  gitHubCard.innerHTML = fieldValue;
}

for (const eachItem of inputList) {
  eachItem.addEventListener("keydown", saveField);
}

// function addName() {
//   let nameValue = nameForm.value;
//   nameCard.innerHTML = nameValue;
// }

// nameForm.addEventListener("keydown", addName);

// function addPosition() {
//   let positionValue = positionForm.value;
//   positionCard.innerHTML = positionValue;
// }

// positionForm.addEventListener("keydown", addPosition);

// function addLinkedin() {
//   let linkedinValue = linkedinForm.value;
//   linkedinCard.setAttribute("href", linkedinValue);
//   return linkedinValue;
// }

// linkedinCard.addEventListener("click", addLinkedin);
