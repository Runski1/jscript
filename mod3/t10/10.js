'use strict';
const myForm = document.querySelector('#source');
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let firstName = myForm.querySelector('[name="firstname"]');
    let lastName = myForm.querySelector('[name="lastname"]');
    document.querySelector('#target').textContent = `Your name is ${firstName.value} ${lastName.value}`;
})