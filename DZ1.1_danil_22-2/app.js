const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("reapit__password");
const checkPasswordButtons = document.querySelectorAll("#check__password");


function validateEmail() {
    return /^[a-z1-9]+@[a-z]+\.[a-z]+$/.test(emailInput.value);
}
  
function validatePassword() {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+={[}\]|\\:;"'<,>.?/`~-]{8,}$/.test(passwordInput.value);
}
  
function validateRepeatPassword() {
    return repeatPasswordInput.value === passwordInput.value;
}
  
emailInput.addEventListener("input", function () {
    emailInput.setCustomValidity(validateEmail() ? "" : "Пожалуйста, введите правильную почту");
});
  
passwordInput.addEventListener("input", function () {
    passwordInput.setCustomValidity(validatePassword() ? "" : "Пароль должен содержать минимум 8 символов, минимум одну заглавную букву, минимум одну строчную букву и миниум одну цифру");
});
  
repeatPasswordInput.addEventListener("input", function () {
    repeatPasswordInput.setCustomValidity(validateRepeatPassword() ? "" : "Пароли не совпадают");
});  

checkPasswordButtons.forEach((button) => {
    const passwordInput = button.previousElementSibling;
    button.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
});

