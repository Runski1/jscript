'use strict';
const result = document.querySelector('#result');
const button = document.querySelector('#start');

function handleInput() {
    const input = document.querySelector('#calculation').value
    let parts = input.split(/([+\-*/])/);  // regex o.O
    let operator = parts[1];
    let num1 = parseInt(parts[0]);
    let num2 = parseInt(parts[2]);
    calculate(operator, num1, num2);
}

function calculate(operator, value1, value2) {
    switch (operator) {
        case '+':
            result.innerHTML = `${value1 + value2}`;
            break;
        case '-':
            result.innerHTML = `${value1 - value2}`;
            break;
        case '*':
            result.innerHTML = `${value1 * value2}`;
            break;
        case '/':
            result.innerHTML = `${value1 / value2}`;
            break;
    }
}

button.addEventListener('click', handleInput);
console.log(Object.keys(document.querySelector('#calculation')));