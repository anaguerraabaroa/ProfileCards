"use strict";

const cardContainer = document.querySelector(".js-cardContainer"); // Card container
const palette1 = document.querySelector(".js-paletteRadio1"); // Palette 1
const palette2 = document.querySelector(".js-paletteRadio2"); // Palette 2
const palette3 = document.querySelector(".js-paletteRadio3"); // Palette 3
const palette4 = document.querySelector(".js-paletteRadio4"); // Palette 4

// Select palette
function selectPalette() {
  if (palette1.checked === true) {
    form.palette = 1;
  }
  if (palette2.checked === true) {
    form.palette = 2;
  }
  if (palette3.checked === true) {
    form.palette = 3;
  }
  if (palette4.checked === true) {
    form.palette = 4;
  }

  renderPalette();
  setLocalStorage();
}

// Render selected palette on card
function renderPalette() {
  if (form.palette === 1) {
    cardContainer.classList.add("palette1");
  }
  if (form.palette === 2) {
    cardContainer.classList.add("palette2");
  }
  if (form.palette === 3) {
    cardContainer.classList.add("palette3");
  }
  if (form.palette === 4) {
    cardContainer.classList.add("palette4");
  }
}

// Palette listeners
palette1.addEventListener("click", selectPalette);
palette2.addEventListener("click", selectPalette);
palette3.addEventListener("click", selectPalette);
palette4.addEventListener("click", selectPalette);

// Reset selected palette to default palette 1
function resetPalette() {
  if (palette1.checked != true) {
    palette1.checked = true;
  } else if ((palette2.checked = true)) {
    palette2.checked = false;
  } else if ((palette3.checked = true)) {
    palette3.checked = false;
  } else if ((palette4.checked = true)) {
    palette4.checked = false;
  }
  renderPalette();
}
