"use strict";

const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const errorMessage = document.querySelector("span.error-message");

function checkPasswordMatch(event) {
  if (password.value == confirm.value) {
    password.className = "error";
    confirm.className = "error";
    errorMessage.textContent = "";
  } else {
    showError();
  }
}

function showError() {
  password.className = "error active";
  confirm.className = "error active";
  errorMessage.textContent = "* Passwords do not match";
}

password.addEventListener("input", checkPasswordMatch);
confirm.addEventListener("input", checkPasswordMatch);

