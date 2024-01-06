"use strict";

const EMAIL = document.getElementById("email");
const USER_EMAIL = document.getElementById("user-email");
const BUTTON = document.getElementById("submit");
const RESET = document.getElementById("reset");
const FORM = document.getElementById("form");
const ERROR_MSG = document.querySelector(".email-msg");
const ILLUSTRATION = document.querySelector(".illust");
const SIGN_UP_SCREEN = document.querySelector(".sign-up");
const ATTRIBUTION = document.querySelector(".attribution");
const SUCCESS_MSG = document.querySelector(".success-msg");


BUTTON.addEventListener('click', (e) => {
    e.preventDefault();
    
    const REG_EX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(EMAIL.value === "") {
        FORM.classList.add("error");
        ERROR_MSG.innerHTML = "Email is required";
    } else if(!EMAIL.value.match(REG_EX)) {
        FORM.classList.add("error");
        ERROR_MSG.innerHTML = "Valid email required";
        EMAIL.style.color = "#ff6257"
    } else {
        FORM.classList.remove("error");
        EMAIL.style.color = "";
        SUCCESS_MSG.style.display = "flex";
        ILLUSTRATION.classList.add("success");
        SIGN_UP_SCREEN.classList.add("success");
        ATTRIBUTION.classList.add("success");
        USER_EMAIL.textContent = EMAIL.value;
    }
});

RESET.addEventListener('click', () => {
        SUCCESS_MSG.style.display = "none";
        ILLUSTRATION.classList.remove("success");
        SIGN_UP_SCREEN.classList.remove("success");
        ATTRIBUTION.classList.remove("success");
        EMAIL.value = "";
})