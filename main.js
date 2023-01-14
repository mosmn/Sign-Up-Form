/*
select element id password
select element id confirm_password

if password length doesnot = 0
compare the value of the value attribute of the two elements
if they are the same, its valid and :valid will be styles will be applied
if they are not the same, its invalid and :invalid will be styles will be applied

to create new element
*/ 

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


