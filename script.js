"use strict";

const EMAIL = document.getElementById("email");
const BUTTON = document.getElementById("submit");
const FORM = document.getElementById("form");
const ERROR_MSG = document.querySelector(".email-msg");


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
    }
});
