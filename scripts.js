"use strict";
// scripts.js
document.getElementById("submit-button").addEventListener("click", function (e) {
  e.preventDefault()
  let isValid = true;

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // All input Tag
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    let inputName = input.getAttribute("name");
    if (inputName === "firstName") {

      if (!firstName) {
        isValid = false;
        document.getElementById("first-name-error").style.display = "block";
        input.style.border = "1px solid #FF7979";
        input.nextElementSibling.style.visibility = "visible";
      } else {
        document.getElementById("first-name-error").style.display = "none";
        input.style.border = "1px solid #ccc";
        input.nextElementSibling.style.visibility = "collapse";
      }
    }

    if (inputName === "lastName") {
      if (!lastName) {
        isValid = false;
        document.getElementById("last-name-error").style.display = "block";
        input.style.border = "1px solid #FF7979";
        input.nextElementSibling.style.visibility = "visible";
      } else {
        document.getElementById("last-name-error").style.display = "none";
        input.style.border = "1px solid #ccc";
        input.nextElementSibling.style.visibility = "collapse";
      }
    }

    if (inputName === "email") {
      if (!email || !email.includes("@")) {
        isValid = false;
        document.getElementById("email-error").style.display = "block";
        input.style.border = "1px solid #FF7979";
        input.nextElementSibling.style.visibility = "visible";
      } else {
        document.getElementById("email-error").style.display = "none";
        input.style.border = "1px solid #ccc";
        input.nextElementSibling.style.visibility = "collapse";
      }
    }

    if (inputName === "password") {
      if (!password) {
        isValid = false;
        document.getElementById("password-error").style.display = "block";
        input.style.border = "1px solid #FF7979";
        input.nextElementSibling.style.visibility = "visible";
      } else {
        document.getElementById("password-error").style.display = "none";
        input.style.border = "1px solid #ccc";
        input.nextElementSibling.style.visibility = "collapse";
      }
    }
    input.value = ''
  });

    if (isValid) {
      alert("Form submitted successfully!");
      // Here you can add code to submit the form data
    }
});
