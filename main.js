/*
BEGIN
    select password input
    select confirm password input
    select error message

    check if confirm password input is empty
    if it is not empty 
        check if password input value is equal to confirm password input value
        if it is equal
            set error message to '*Passwords match'
            set error message color to green
        if it is not equal
            set error message to '*Passwords do not match'
            set error message color to red
END
*/

const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const errorMessage = document.querySelector('#error-message');

confirmPasswordInput.addEventListener('input', () => {
    if (confirmPasswordInput.value !== '') {
        if (passwordInput.value === confirmPasswordInput.value) {
            errorMessage.textContent = '*Passwords match';
            errorMessage.style.color = 'green';
        } else {
            errorMessage.textContent = '*Passwords do not match';
            errorMessage.style.color = 'red';
        }
    } else {
        errorMessage.textContent = '';
    }
});






