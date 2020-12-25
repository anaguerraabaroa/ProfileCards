"use strict";

// Set form data on localStorage
function setLocalStorage() {
  localStorage.setItem("formData", JSON.stringify(form));
}

// Get form data from localStorage
function getLocalStorage() {
  const localFormData = JSON.parse(localStorage.getItem("formData"));
  if (localFormData !== null) {
    form = localFormData;
    document.querySelector(".js-nameInput").value = form.name;
    document.querySelector(".js-positionInput").value = form.job;
    document.querySelector(".js-tlInput").value = form.phone;
    document.querySelector(".js-emailInput").value = form.email;
    document.querySelector(".js-linkedinInput").value = form.linkedin;
    document.querySelector(".js-gitHubInput").value = form.github;
    profileImage.style.backgroundImage = `url(${form.photo})`;
    profilePreview.style.backgroundImage = `url(${form.photo})`;
    const selectedPalette = document.querySelector("#palette" + form.palette);
    selectedPalette.click();
  }
  renderCard();
  listenSaveField();
}

// Start app
getLocalStorage();
