"use strict";

const palette1 = document.querySelector(".js-paletteRadio1");
const palette2 = document.querySelector(".js-paletteRadio2");
const palette3 = document.querySelector(".js-paletteRadio3");
const palette4 = document.querySelector(".js-paletteRadio4");

function changeColors() {
  const name = document.querySelector(".js-nameCard");
  const border1 = document.querySelector(".js-border1");
  const border2 = document.querySelector(".js-border2");
  const circle1 = document.querySelector(".js-circle1");
  const circle2 = document.querySelector(".js-circle2");
  const circle3 = document.querySelector(".js-circle3");
  const circle4 = document.querySelector(".js-circle4");
  const icon1 = document.querySelector(".js-icon1");
  const icon2 = document.querySelector(".js-icon2");
  const icon3 = document.querySelector(".js-icon3");
  const icon4 = document.querySelector(".js-icon4");

  //Palette 1

  if (palette1.checked === true) {
    //Name
    name.classList.add("palette1_name"); //palette 1
    name.classList.remove("palette2_name"); //palette 2
    name.classList.remove("palette3_name"); //palette 3
    name.classList.remove("palette4_name"); //palette 4

    //Border
    border1.classList.add("palette1_border1"); //palette 1
    border1.classList.remove("palette2_border1"); //palette 2
    border1.classList.remove("palette3_border1"); //palette 3
    border1.classList.remove("palette4_border1"); //palette 4
    border2.classList.add("palette1_border2"); //palette 1
    border2.classList.remove("palette2_border2"); //palette 2
    border2.classList.remove("palette3_border2"); //palette 3
    border2.classList.remove("palette4_border2"); //palette 4

    //Circles
    circle1.classList.add("palette1_circle1"); //palette 1
    circle1.classList.remove("palette2_circle1"); //palette 2
    circle1.classList.remove("palette3_circle1"); //palette 3
    circle1.classList.remove("palette4_circle1"); //palette 4
    circle2.classList.add("palette1_circle2"); //palette 1
    circle2.classList.remove("palette2_circle2"); //palette 2
    circle2.classList.remove("palette3_circle2"); //palette 3
    circle2.classList.remove("palette4_circle2"); //palette 4
    circle3.classList.add("palette1_circle3"); //palette 1
    circle3.classList.remove("palette2_circle3"); //palette 2
    circle3.classList.remove("palette3_circle3"); //palette 3
    circle3.classList.remove("palette4_circle3"); //palette 4
    circle4.classList.add("palette1_circle4"); //palette 1
    circle4.classList.remove("palette2_circle4"); //palette 2
    circle4.classList.remove("palette3_circle4"); //palette 3
    circle4.classList.remove("palette4_circle4"); //palette 4

    //Icon

    icon1.classList.add("palette1_icon1"); //palette 1
    icon1.classList.remove("palette2_icon1"); //palette 2
    icon1.classList.remove("palette3_icon1"); //palette 3
    icon1.classList.remove("palette4_icon1"); //palette 4
    icon2.classList.add("palette1_icon2"); //palette 1
    icon2.classList.remove("palette2_icon2"); //palette 2
    icon2.classList.remove("palette3_icon2"); //palette 3
    icon2.classList.remove("palette4_icon2"); //palette 4
    icon3.classList.add("palette1_icon3"); //palette 1
    icon3.classList.remove("palette2_icon3"); //palette 2
    icon3.classList.remove("palette3_icon3"); //palette 3
    icon3.classList.remove("palette4_icon3"); //palette 4
    icon4.classList.add("palette1_icon4"); //palette 1
    icon4.classList.remove("palette2_icon4"); //palette 2
    icon4.classList.remove("palette3_icon4"); //palette 3
    icon4.classList.remove("palette4_icon4"); //palette 4
  }

  //Palette 2

  if (palette2.checked === true) {
    //Name
    name.classList.remove("palette1_name"); //palette 1
    name.classList.add("palette2_name"); //palette 2
    name.classList.remove("palette3_name"); //palette 3
    name.classList.remove("palette4_name"); //palette 4

    //Border
    border1.classList.remove("palette1_border1"); //palette 1
    border1.classList.add("palette2_border1"); //palette 2
    border1.classList.remove("palette3_border1"); //palette 3
    border1.classList.remove("palette4_border1"); //palette 4
    border2.classList.remove("palette1_border2"); //palette 1
    border2.classList.add("palette2_border2"); //palette 2
    border2.classList.remove("palette3_border2"); //palette 3
    border2.classList.remove("palette4_border2"); //palette 4

    //Circles
    circle1.classList.remove("palette1_circle1"); //palette 1
    circle1.classList.add("palette2_circle1"); //palette 2
    circle1.classList.remove("palette3_circle1"); //palette 3
    circle1.classList.remove("palette4_circle1"); //palette 4
    circle2.classList.remove("palette1_circle2"); //palette 1
    circle2.classList.add("palette2_circle2"); //palette 2
    circle2.classList.remove("palette3_circle2"); //palette 3
    circle2.classList.remove("palette4_circle2"); //palette 4
    circle3.classList.remove("palette1_circle3"); //palette 1
    circle3.classList.add("palette2_circle3"); //palette 2
    circle3.classList.remove("palette3_circle3"); //palette 3
    circle3.classList.remove("palette4_circle3"); //palette 4
    circle4.classList.remove("palette1_circle4"); //palette 1
    circle4.classList.add("palette2_circle4"); //palette 2
    circle4.classList.remove("palette3_circle4"); //palette 3
    circle4.classList.remove("palette4_circle4"); //palette 4

    //Icon

    icon1.classList.remove("palette1_icon1"); //palette 1
    icon1.classList.add("palette2_icon1"); //palette 2
    icon1.classList.remove("palette3_icon1"); //palette 3
    icon1.classList.remove("palette4_icon1"); //palette 4
    icon2.classList.remove("palette1_icon2"); //palette 1
    icon2.classList.add("palette2_icon2"); //palette 2
    icon2.classList.remove("palette3_icon2"); //palette 3
    icon2.classList.remove("palette4_icon2"); //palette 4
    icon3.classList.remove("palette1_icon3"); //palette 1
    icon3.classList.add("palette2_icon3"); //palette 2
    icon3.classList.remove("palette3_icon3"); //palette 3
    icon3.classList.remove("palette4_icon3"); //palette 4
    icon4.classList.remove("palette1_icon4"); //palette 1
    icon4.classList.add("palette2_icon4"); //palette 2
    icon4.classList.remove("palette3_icon4"); //palette 3
    icon4.classList.remove("palette4_icon4"); //palette 4
  }

  //Palette 3

  if (palette3.checked === true) {
    //Name
    name.classList.remove("palette1_name"); //palette 1
    name.classList.remove("palette2_name"); //palette 2
    name.classList.add("palette3_name"); //palette 3
    name.classList.remove("palette4_name"); //palette 4

    //Border
    border1.classList.remove("palette1_border1"); //palette 1
    border1.classList.remove("palette2_border1"); //palette 2
    border1.classList.add("palette3_border1"); //palette 3
    border1.classList.remove("palette4_border1"); //palette 4
    border2.classList.remove("palette1_border2"); //palette 1
    border2.classList.remove("palette2_border2"); //palette 2
    border2.classList.add("palette3_border2"); //palette 3
    border2.classList.remove("palette4_border2"); //palette 4

    //Circles
    circle1.classList.remove("palette1_circle1"); //palette 1
    circle1.classList.remove("palette2_circle1"); //palette 2
    circle1.classList.add("palette3_circle1"); //palette 3
    circle1.classList.remove("palette4_circle1"); //palette 4
    circle2.classList.remove("palette1_circle2"); //palette 1
    circle2.classList.remove("palette2_circle2"); //palette 2
    circle2.classList.add("palette3_circle2"); //palette 3
    circle2.classList.remove("palette4_circle2"); //palette 4
    circle3.classList.remove("palette1_circle3"); //palette 1
    circle3.classList.remove("palette2_circle3"); //palette 2
    circle3.classList.add("palette3_circle3"); //palette 3
    circle3.classList.remove("palette4_circle3"); //palette 4
    circle4.classList.remove("palette1_circle4"); //palette 1
    circle4.classList.remove("palette2_circle4"); //palette 2
    circle4.classList.add("palette3_circle4"); //palette 3
    circle4.classList.remove("palette4_circle4"); //palette 4

    //Icon

    icon1.classList.remove("palette1_icon1"); //palette 1
    icon1.classList.remove("palette2_icon1"); //palette 2
    icon1.classList.add("palette3_icon1"); //palette 3
    icon1.classList.remove("palette4_icon1"); //palette 4
    icon2.classList.remove("palette1_icon2"); //palette 1
    icon2.classList.remove("palette2_icon2"); //palette 2
    icon2.classList.add("palette3_icon2"); //palette 3
    icon2.classList.remove("palette4_icon2"); //palette 4
    icon3.classList.remove("palette1_icon3"); //palette 1
    icon3.classList.remove("palette2_icon3"); //palette 2
    icon3.classList.add("palette3_icon3"); //palette 3
    icon3.classList.remove("palette4_icon3"); //palette 4
    icon4.classList.remove("palette1_icon4"); //palette 1
    icon4.classList.remove("palette2_icon4"); //palette 2
    icon4.classList.add("palette3_icon4"); //palette 3
    icon4.classList.remove("palette4_icon4"); //palette 4
  }

  //Palette 4

  if (palette4.checked === true) {
    //Name
    name.classList.remove("palette1_name"); //palette 1
    name.classList.remove("palette2_name"); //palette 2
    name.classList.remove("palette3_name"); //palette 3
    name.classList.add("palette4_name"); //palette 4

    //Border
    border1.classList.remove("palette1_border1"); //palette 1
    border1.classList.remove("palette2_border1"); //palette 2
    border1.classList.remove("palette3_border1"); //palette 3
    border1.classList.add("palette4_border1"); //palette 4
    border2.classList.remove("palette1_border2"); //palette 1
    border2.classList.remove("palette2_border2"); //palette 2
    border2.classList.remove("palette3_border2"); //palette 3
    border2.classList.add("palette4_border2"); //palette 4

    //Circles
    circle1.classList.remove("palette1_circle1"); //palette 1
    circle1.classList.remove("palette2_circle1"); //palette 2
    circle1.classList.remove("palette3_circle1"); //palette 3
    circle1.classList.add("palette4_circle1"); //palette 4
    circle2.classList.remove("palette1_circle2"); //palette 1
    circle2.classList.remove("palette2_circle2"); //palette 2
    circle2.classList.remove("palette3_circle2"); //palette 3
    circle2.classList.add("palette4_circle2"); //palette 4
    circle3.classList.remove("palette1_circle3"); //palette 1
    circle3.classList.remove("palette2_circle3"); //palette 2
    circle3.classList.remove("palette3_circle3"); //palette 3
    circle3.classList.add("palette4_circle3"); //palette 4
    circle4.classList.remove("palette1_circle4"); //palette 1
    circle4.classList.remove("palette2_circle4"); //palette 2
    circle4.classList.remove("palette3_circle4"); //palette 3
    circle4.classList.add("palette4_circle4"); //palette 4

    //Icon

    icon1.classList.remove("palette1_icon1"); //palette 1
    icon1.classList.remove("palette2_icon1"); //palette 2
    icon1.classList.remove("palette3_icon1"); //palette 3
    icon1.classList.add("palette4_icon1"); //palette 4
    icon2.classList.remove("palette1_icon2"); //palette 1
    icon2.classList.remove("palette2_icon2"); //palette 2
    icon2.classList.remove("palette3_icon2"); //palette 3
    icon2.classList.add("palette4_icon2"); //palette 4
    icon3.classList.remove("palette1_icon3"); //palette 1
    icon3.classList.remove("palette2_icon3"); //palette 2
    icon3.classList.remove("palette3_icon3"); //palette 3
    icon3.classList.add("palette4_icon3"); //palette 4
    icon4.classList.remove("palette1_icon4"); //palette 1
    icon4.classList.remove("palette2_icon4"); //palette 2
    icon4.classList.remove("palette3_icon4"); //palette 3
    icon4.classList.add("palette4_icon4"); //palette 4
  }
}

palette1.addEventListener("click", changeColors);
palette2.addEventListener("click", changeColors);
palette3.addEventListener("click", changeColors);
palette4.addEventListener("click", changeColors);

// ---------- ESTO ES CÓDIGO DE SEGURIDAD ---------

//   //Palette 2

//   if (palette2.checked === true) {
//     //Name
//     name.classList.remove("palette1_name"); //palette 1
//     name.classList.add("palette2_name"); //palette 2
//     name.classList.remove("palette3_name"); //palette 3
//     name.classList.remove("palette4_name"); //palette 4

//     //Border
//     border.classList.remove("palette1_border"); //palette 1
//     border.classList.add("palette2_border"); //palette 2
//     border.classList.remove("palette3_border"); //palette 3
//     border.classList.remove("palette4_border"); //palette 4

//     //Circles
//     circle.classList.remove("palette1_circle"); //palette 1
//     circle.classList.add("palette2_circle"); //palette 2
//     circle.classList.remove("palette3_circle"); //palette 3
//     circle.classList.remove("palette4_circle"); //palette 4

//     //Icon
//     icon.classList.remove("palette1_icon"); //palette 1
//     icon.classList.add("palette2_icon"); //palette 2
//     icon.classList.remove("palette3_icon"); //palette 3
//     icon.classList.remove("palette4_icon"); //palette 4
//   }

//   //Palette 3

//   if (palette3.checked === true) {
//     //Name
//     name.classList.remove("palette1_name"); //palette 1
//     name.classList.remove("palette2_name"); //palette 2
//     name.classList.add("palette3_name"); //palette 3
//     name.classList.remove("palette4_name"); //palette 4

//     //Border
//     border.classList.remove("palette1_border"); //palette 1
//     border.classList.remove("palette2_border"); //palette 2
//     border.classList.add("palette3_border"); //palette 3
//     border.classList.remove("palette4_border"); //palette 4

//     //Circles
//     circle.classList.remove("palette1_circle"); //palette 1
//     circle.classList.remove("palette2_circle"); //palette 2
//     circle.classList.add("palette3_circle"); //palette 3
//     circle.classList.remove("palette4_circle"); //palette 4

//     //Icon
//     icon.classList.remove("palette1_icon"); //palette 1
//     icon.classList.remove("palette2_icon"); //palette 2
//     icon.classList.add("palette3_icon"); //palette 3
//     icon.classList.remove("palette4_icon"); //palette 4
//   }

//   //Palette 4

//   if (palette4.checked === true) {
//     //Name
//     name.classList.remove("palette1_name"); //palette 1
//     name.classList.remove("palette2_name"); //palette 2
//     name.classList.remove("palette3_name"); //palette 3
//     name.classList.add("palette4_name"); //palette 4

//     //Border
//     border.classList.remove("palette1_border"); //palette 1
//     border.classList.remove("palette2_border"); //palette 2
//     border.classList.remove("palette3_border"); //palette 3
//     border.classList.add("palette4_border"); //palette 4

//     //Circles
//     circle.classList.remove("palette1_circle"); //palette 1
//     circle.classList.remove("palette2_circle"); //palette 2
//     circle.classList.remove("palette3_circle"); //palette 3
//     circle.classList.add("palette4_circle"); //palette 4

//     //Icon
//     icon.classList.remove("palette1_icon"); //palette 1
//     icon.classList.remove("palette2_icon"); //palette 2
//     icon.classList.remove("palette3_icon"); //palette 3
//     icon.classList.add("palette4_icon"); //palette 4
//   }
// }
