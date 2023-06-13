const password = document.querySelector(".password");
const easePass = document.querySelector(".ease");
const mediumPass = document.querySelector(".medium");
const strongPass = document.querySelector(".strong");
const showPasswordBtn = document.querySelector(".show__password-btn");
const value = document.querySelectorAll("li");

showPasswordBtn.addEventListener("click", () => {
    if (showPasswordBtn.innerHTML == "visibility_off") {
        password.type = "password";
        showPasswordBtn.innerHTML = "visibility";
    } else {
        password.type = "text";
        showPasswordBtn.innerHTML = "visibility_off";
    }
});

checkPassword();
password.addEventListener("keyup", () => {
    checkPassword();
});
function checkPassword() {
    let numbers = new RegExp("(?=.*[0-9])");
    let letter = new RegExp("(?=.*[a-z])");
    let symbols = new RegExp("(?=.*[!@#$%^&*])");

    if (password.value.length < 8) {
        value.forEach((item) => item.classList.add("red"));
        value.forEach((item) => item.classList.remove("yellow"));
    }
    if (password.value.length == 0 || password.value.length > 7) {
        value.forEach((item) => item.classList.remove("red"));
    }

    if (numbers.test(password.value)) {
        easePass.classList.add("red");
    }
    if (letter.test(password.value)) {
        easePass.classList.add("red");
    }
    if (symbols.test(password.value)) {
        easePass.classList.add("red");
    }
    ///
    if (letter.test(password.value) && symbols.test(password.value) && password.value.length > 7) {
        value.forEach((item) => item.classList.remove("red"));
        mediumPass.classList.add("yellow");
        easePass.classList.add("yellow");
    } else {
        // mediumPass.classList.remove("yellow");
        // easePass.classList.remove("yellow");
    }

    if (letter.test(password.value) && numbers.test(password.value) && password.value.length > 7) {
        value.forEach((item) => item.classList.remove("red"));
        mediumPass.classList.add("yellow");
        easePass.classList.add("yellow");
    } else {
        // mediumPass.classList.remove("yellow");
        // easePass.classList.remove("yellow");
    }

    if (numbers.test(password.value) && symbols.test(password.value) && password.value.length > 7) {
        value.forEach((item) => item.classList.remove("red"));
        mediumPass.classList.add("yellow");
        easePass.classList.add("yellow");
    } else {
        // mediumPass.classList.remove("yellow");
        // easePass.classList.remove("yellow");
    }

    // worked
    if (password.value.length > 7 && numbers.test(password.value) && letter.test(password.value) && symbols.test(password.value)) {
        value.forEach((item) => item.classList.add("strong__pass"));
    } else {
        value.forEach((item) => item.classList.remove("strong__pass"));
    }
}
