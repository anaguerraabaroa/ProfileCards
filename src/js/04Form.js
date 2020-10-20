"use strict";

let LinkedinLink = document.querySelector(".js-linkedinCard");

const inputList = document.querySelectorAll(".js-field"); //formulario
const nameCard = document.querySelector(".js-nameCard");
const positionCard = document.querySelector(".js-positionCard");
let inputValue;
let inputId;
const form =
{
  fullName: "",
  position: "",
  telephone: "",
  emailAddress: "",
  linkedin: "",
  github: "",
};

for (let i = 0; i < inputList.length; i++) {
  inputList[i].addEventListener("blur", saveField);
}

function saveField(event) {
  inputValue = event.currentTarget.value;
  inputId = event.currentTarget.id;
  form[inputId] = inputValue;
  console.log(form);
  paintCard();
}

function paintCard() {
  console.log(form.fullName);
  document.querySelector(".js-nameCard").innerHTML = form.fullName || "Nombre Apellido";
  document.querySelector(".js-positionCard").innerHTML = form.position || "Front-end developer";
  document.querySelector(".js-tlCard").href = "tel:" + form.telephone;
  document.querySelector(".js-emailCard").href = "mailto:" + form.emailAddress;
  document.querySelector(".js-linkedinCard").href = form.linkedin;
  document.querySelector(".js-gitHubCard").href = "https://github.com" + form.github;
}

