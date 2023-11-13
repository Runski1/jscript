'use strict';
const num = Number(prompt("Enter integer"));
let myStr = "";
if (num < 2) {
    myStr = "not ";
}
else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            myStr = "not ";
            break;
        }
    }
}
document.querySelector('#target').innerHTML = "Number " + num + " is " + myStr + "a prime number.";
