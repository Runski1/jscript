'use strict';
const year = Number(prompt('Enter year'));
let myString;
switch (year % 4) {
    case 0:
        if (year % 100 === 0 && year % 400 !== 0) {
            myString = " is not a leap year.";
        } else {
            myString = " is a leap year.";
        }
        break;
    default:
        myString = " is not a leap year.";
}
document.querySelector('#target').innerHTML = year + myString;

