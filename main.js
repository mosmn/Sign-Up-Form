const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const errorMessages = document.getElementById('error-message');

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("*Passwords Don't Match");
        errorMessages.innerHTML = "Passwords Don't Match";
        errorMessages.style.color = "red";
    } else {
        confirm_password.setCustomValidity('');
        errorMessages.innerHTML = "Passwords Match!";
        errorMessages.style.color = "green";
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


