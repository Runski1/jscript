'use strict';
const confirmed = confirm("Should I calculate square root?");
let returnString;
if (confirmed === false) {
    returnString = "The square root is not calculated";
} else {
    const num = Number(prompt("Enter a valid number for square root"));
    if (num < 0) {
        returnString = "I dont have enough imagination to solve this.";
    } else {
        returnString = "The square root of " + num + " is " + Math.sqrt(num);
    }
}
document.querySelector('#target').innerHTML = returnString