"use strict";

const inputList = document.querySelectorAll(".js-field"); // Form input list
let inputValue; // Form input values
let inputId; // Form input ids
// Form input object
let form = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: `url(https://i.picasion.com/pic90/02b56d6431f0a6fe7082958c95d7788d.gif)`,
};
const resetButton = document.querySelector(".js-resetBtn"); // Reset button

// Save form input values in form object
function saveField(event) {
  inputValue = event.currentTarget.value;
  inputId = event.currentTarget.id;
  form[inputId] = inputValue;
  renderCard();
  setLocalStorage();
}

// Form input listener
function listenSaveField() {
  for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener("keyup", saveField);
  }
}

// Render form input values on card
function renderCard() {
  document.querySelector(".js-nameCard").innerHTML =
    form.name || "Nombre completo";
  document.querySelector(".js-positionCard").innerHTML = form.job || "Puesto";
  document.querySelector(".js-tlCard").href = "tel:" + form.phone;
  document.querySelector(".js-emailCard").href = "mailto:" + form.email;
  document.querySelector(".js-linkedinCard").href = form.linkedin;
  document.querySelector(".js-gitHubCard").href =
    "https://github.com" + form.github;
  profileImage.style.backgroundImage = `url(${form.photo})`;
}

// Reset form input values on card, form & localStorage
const handleReset = function () {
  form.palette = 1;
  form.name = "";
  form.job = "";
  form.email = "";
  form.phone = "";
  form.linkedin = "";
  form.github = "";
  form.photo =
    "url(https://i.picasion.com/pic90/02b56d6431f0a6fe7082958c95d7788d.gif)";
  localStorage.removeItem("formData");
  for (const input of inputList) {
    input.value = "";
  }
  profileImage.style.backgroundImage =
    "url(https://i.picasion.com/pic90/02b56d6431f0a6fe7082958c95d7788d.gif)";
  profilePreview.style.backgroundImage =
    "url(https://i.picasion.com/pic90/02b56d6431f0a6fe7082958c95d7788d.gif)";

  renderCard();
  resetPalette();
  setLocalStorage();
};

// Reset button listener
resetButton.addEventListener("click", handleReset);
