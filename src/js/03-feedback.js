const throttle = require('lodash.throttle');
const form = document.querySelector('form');
const emailField = document.querySelector('input');
const messageField = document.querySelector('textarea');

const STORAGE_NAME = 'feedback-form-state';
const values = JSON.parse(localStorage.getItem(STORAGE_NAME))


if (values) {
    // console.log(values);
    messageField.value = values.message;
    emailField.value = values.email;
}

form.addEventListener('input', throttle((event) => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify({email: emailField.value, message: messageField.value}));
    const test = localStorage.getItem(STORAGE_NAME)
    console.log(test);
}, 500))


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(localStorage.getItem(STORAGE_NAME))
     localStorage.removeItem(STORAGE_NAME)
})