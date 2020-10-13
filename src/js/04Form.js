"use strict";

console.log("Hola mundo 2");

const nameForm = document.querySelector(".js-nameForm");
const nameCard = document.querySelector(".js-nameCard");
const positionForm = document.querySelector(".js-positionForm");
const positionCard = document.querySelector(".js-positionCard");
const linkedinForm = document.querySelector(".js-linkedinForm");
const linkedinCard = document.querySelector(".js-linkedinCard");
const gitHubForm = document.querySelector(".js-gitHubForm");
const gitHubCard = document.querySelector(".js-gitHubCard");

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

function addLinkedin() {
  let linkedinValue = linkedinForm.value;
  linkedinCard.setAttribute("href", linkedinValue);
  return linkedinValue;
}

linkedinCard.addEventListener("click", addLinkedin);
