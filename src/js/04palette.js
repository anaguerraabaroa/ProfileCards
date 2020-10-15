"use strict";

const palette1 = document.querySelector(".js-paletteRadio1");
const palette2 = document.querySelector(".js-paletteRadio2");
const palette3 = document.querySelector(".js-paletteRadio3");
const palette4 = document.querySelector(".js-paletteRadio4");

function changeColors() {
  const name = document.querySelector("js-nameCard");
  const border = document.querySelector("js-border");
  const circle = document.querySelector("js-circle");
  const icon = document.querySelector("js-icon");

  //Palette 1

  if (palette1.checked === true) {
    //Name
    name.classList.add("palette1_name"); //palette 1
    name.classList.remove("palette2_name"); //palette 2
    name.classList.remove("palette3_name"); //palette 3
    name.classList.remove("palette4_name"); //palette 4

    //Border
    border.classList.add("palette1_border"); //palette 1
    border.classList.remove("palette2_border"); //palette 2
    border.classList.remove("palette3_border"); //palette 3
    border.classList.remove("palette4_border"); //palette 4

    //Circles
    circle.classList.add("palette1_circle"); //palette 1
    circle.classList.remove("palette2_circle"); //palette 2
    circle.classList.remove("palette3_circle"); //palette 3
    circle.classList.remove("palette4_circle"); //palette 4

    //Icon
    icon.classList.add("palette1_icon"); //palette 1
    icon.classList.remove("palette2_icon"); //palette 2
    icon.classList.remove("palette3_icon"); //palette 3
    icon.classList.remove("palette4_icon"); //palette 4
  }

  //Palette 2

  if (palette2.checked === true) {
    //Name
    name.classList.remove("palette1_name"); //palette 1
    name.classList.add("palette2_name"); //palette 2
    name.classList.remove("palette3_name"); //palette 3
    name.classList.remove("palette4_name"); //palette 4

    //Border
    border.classList.remove("palette1_border"); //palette 1
    border.classList.add("palette2_border"); //palette 2
    border.classList.remove("palette3_border"); //palette 3
    border.classList.remove("palette4_border"); //palette 4

    //Circles
    circle.classList.remove("palette1_circle"); //palette 1
    circle.classList.add("palette2_circle"); //palette 2
    circle.classList.remove("palette3_circle"); //palette 3
    circle.classList.remove("palette4_circle"); //palette 4

    //Icon
    icon.classList.remove("palette1_icon"); //palette 1
    icon.classList.add("palette2_icon"); //palette 2
    icon.classList.remove("palette3_icon"); //palette 3
    icon.classList.remove("palette4_icon"); //palette 4
  }

  //Palette 3

  if (palette3.checked === true) {
    //Name
    name.classList.remove("palette1_name"); //palette 1
    name.classList.remove("palette2_name"); //palette 2
    name.classList.add("palette3_name"); //palette 3
    name.classList.remove("palette4_name"); //palette 4

    //Border
    border.classList.remove("palette1_border"); //palette 1
    border.classList.remove("palette2_border"); //palette 2
    border.classList.add("palette3_border"); //palette 3
    border.classList.remove("palette4_border"); //palette 4

    //Circles
    circle.classList.remove("palette1_circle"); //palette 1
    circle.classList.remove("palette2_circle"); //palette 2
    circle.classList.add("palette3_circle"); //palette 3
    circle.classList.remove("palette4_circle"); //palette 4

    //Icon
    icon.classList.remove("palette1_icon"); //palette 1
    icon.classList.remove("palette2_icon"); //palette 2
    icon.classList.add("palette3_icon"); //palette 3
    icon.classList.remove("palette4_icon"); //palette 4
  }

  //Palette 4

  if (palette4.checked === true) {
    //Name
    name.classList.remove("palette1_name"); //palette 1
    name.classList.remove("palette2_name"); //palette 2
    name.classList.remove("palette3_name"); //palette 3
    name.classList.add("palette4_name"); //palette 4

    //Border
    border.classList.remove("palette1_border"); //palette 1
    border.classList.remove("palette2_border"); //palette 2
    border.classList.remove("palette3_border"); //palette 3
    border.classList.add("palette4_border"); //palette 4

    //Circles
    circle.classList.remove("palette1_circle"); //palette 1
    circle.classList.remove("palette2_circle"); //palette 2
    circle.classList.remove("palette3_circle"); //palette 3
    circle.classList.add("palette4_circle"); //palette 4

    //Icon
    icon.classList.remove("palette1_icon"); //palette 1
    icon.classList.remove("palette2_icon"); //palette 2
    icon.classList.remove("palette3_icon"); //palette 3
    icon.classList.add("palette4_icon"); //palette 4
  }
}

palette1.addEventListener("click", changeColors);
/* palette2.addEventListener("click", changeColors);
palette3.addEventListener("click", changeColors);
palette4.addEventListener("click", changeColors); */
