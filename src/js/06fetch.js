"use strict";

const cardLink = document.querySelector(".js-card-link"); // Card link
const twitterButton = document.querySelector(".js-twitter-btn"); // Twitter button

// Send form data to API and get card link or server error
function sendRequest() {
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
      cardLink.innerHTML = "Error en el servidor";
    });
}

// Create card button listener
createCardbtn.addEventListener("click", sendRequest);

// Show card link on form
function showURL(result) {
  if (result.success) {
    cardLink.href = result.cardURL;
    cardLink.innerHTML = cardLink.href;
  } else {
    cardLink.innerHTML = "ERROR: " + result.error;
  }
}

// Share card link on Twitter
function createTwitterLink(result) {
  const twitterText = encodeURIComponent(
    "¡Ya formo parte del mundo de las sombras gracias a DevilAPPers Profile Cards!:"
  );
  const twitterURL = cardLink.innerHTML;
  twitterButton.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${twitterURL}`;
}

// Twitter button listener
twitterButton.addEventListener("click", createTwitterLink);
