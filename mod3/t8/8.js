'use strict';
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const selection = document.querySelector('#operation');
const result = document.querySelector('#result');
const button = document.querySelector('#start');

function calculate() {
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);
    switch (selection.value) {
        case 'add':
            result.innerHTML = `${value1 + value2}`;
            break;
        case 'sub':
            result.innerHTML = `${value1 - value2}`;
            break;
        case 'multi':
            result.innerHTML = `${value1 * value2}`;
            break;
        case 'div':
            result.innerHTML = `${value1 / value2}`;
            break;
    }
}

button.addEventListener('click', calculate);
