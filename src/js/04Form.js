"use strict";

const inputList = document.querySelectorAll(".js-field"); // --- Form inputs
let inputValue;
let inputId;
let form = {
  palette: "",
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

// ----- Saves form input values in FORM array
function saveField(event) {
  inputValue = event.currentTarget.value;
  inputId = event.currentTarget.id;
  form[inputId] = inputValue;
  setLocalStorage();
  paintCard();
}

// ----- Paints form input values on card
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

// ----- Clears values on card & on inputs & resets default image
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

  setLocalStorage(); // See function in 09localStorage - Line 3
  paintCard(); // See function in line 38
  erasePalettes(); // ----- See function in 05palette.js - Line 258
};
resetButton.addEventListener("click", handleReset);
