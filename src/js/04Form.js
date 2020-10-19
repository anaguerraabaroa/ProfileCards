"use strict";

let LinkedinLink = document.querySelector(".js-linkedinCard");

const inputList = document.querySelectorAll(".js-field"); //formulario
const nameCard = document.querySelector(".js-nameCard");
const positionCard = document.querySelector(".js-positionCard");
let inputValue;
let inputId;
const form =
{
  fullName: " ",
  position: " ",
  emailAddress: " ",
  telephone: " ",
  linkedin: " ",
  github: " ",
};

for (let i = 0; i < inputList.length; i++) {
  inputList[i].addEventListener("blur", saveField);
}

function saveField(event) {
  inputValue = event.currentTarget.value;
  inputId = event.currentTarget.id;
  console.log(inputValue, inputId);
  paintCard();
}

function paintCard(event) {
  form[event.currentTarget.id] = event.currentTarget.value;
}

//Esto es lo que hemos hecho con Dayana
// for (let i = 0; i < inputList.length; i++) {
//   inputList[i].addEventListener("blur", saveField);
// }

// function saveField(event) {
//   inputValue = event.currentTarget.value;
//   inputId = event.currentTarget.id;
//   console.log(inputValue, inputId);
//   paintCard();
// }

// function paintCard() {
//   if (inputId === "fullName") {
//     nameCard.innerHTML = inputValue;
//   } else if (inputId === "position") {
//     positionCard.innerHTML = inputValue;
//   }
// }
//Hasta aquí llega lo que hemos hecho con Dayana

// FullName
// inputList[0].addEventListener("keyup", saveField);
// function saveField(event) {
//   const nameField = event.currentTarget.value;
//   nameCard.innerHTML = nameField;
// }
// Position
// inputList[1].addEventListener("keyup", saveField2);
// function saveField2(event) {
//   const positionField = event.currentTarget.value;
//   positionCard.innerHTML = positionField;
// }
// E-mail


// Teléfono
// Linkedin

// inputList[4].addEventListener("keyup", saveField6);
// function saveField6(event) {
//   const linkInField = event.currentTarget.value;
//   console.log(linkInField);
//   LinkedinLink.href = linkInField;

  // linkInField.innerHTML = positionField;
// }
// Github
