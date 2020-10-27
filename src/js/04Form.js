"use strict";

let LinkedinLink = document.querySelector(".js-linkedinCard");

const inputList = document.querySelectorAll(".js-field"); //formulario
const nameCard = document.querySelector(".js-nameCard");
const positionCard = document.querySelector(".js-positionCard");
let inputValue;
let inputId;
let form = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

function listenSaveField() {
  for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener("keyup", saveField);
  }
}

// Equipara los valores introducidos en el formulario con los correspondientes elementos de la tarjeta
function saveField(event) {
  inputValue = event.currentTarget.value;
  inputId = event.currentTarget.id;
  form[inputId] = inputValue;
  setLocalStorage();
  paintCard();
}

// Pinta los valores introducidos en el formulario en la tarjeta
function paintCard() {
  document.querySelector(".js-nameCard").innerHTML =
    form.name || "Nombre Apellido";
  document.querySelector(".js-positionCard").innerHTML =
    form.job || "Front-end developer";
  document.querySelector(".js-tlCard").href = "tel:" + form.phone;
  document.querySelector(".js-emailCard").href = "mailto:" + form.email;
  document.querySelector(".js-linkedinCard").href = form.linkedin;
  document.querySelector(".js-gitHubCard").href =
    "https://github.com" + form.github;
}

//Reset

const resetButton = document.querySelector(".js-resetBtn");

const handleReset = function () {
  form.name = "";
  form.job = "";
  form.email = "";
  form.phone = "";
  form.linkedin = "";
  form.github = "";
  form.photo = "";
  localStorage.removeItem("formData");
  for (const input of inputList) {
    input.value = "";
  }
  profileImage.style.backgroundImage =
    "url(https://i.picasion.com/pic90/c5111e71a51b403560ec5dc5e27fdae1.gif)";
  profilePreview.style.backgroundImage =
    "url(https://i.picasion.com/pic90/c5111e71a51b403560ec5dc5e27fdae1.gif)";

  setLocalStorage();
  paintCard();
  erasePalettes(); // 05palette.js - Line 258
};
resetButton.addEventListener("click", handleReset);
