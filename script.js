"use strict";

const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const errorMessage = document.querySelector("span.error-message");

function checkPasswordMatch(event) {
  if (password.value == confirm.value) {
    // The passwords match, so reset back to their default state
    password.className = "error";
    confirm.className = "error";
    errorMessage.textContent = "";
  } else {
    showError();
  }
}

function showError() {
  // Ensure that the password inputs have both the "error" and "active" classes
  // if they do not match each other
  password.className = "error active";
  confirm.className = "error active";
  errorMessage.textContent = "* Passwords do not match";
}

password.addEventListener("input", checkPasswordMatch);
confirm.addEventListener("input", checkPasswordMatch);

