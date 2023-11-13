'use strict';
const maxRoll = Number(prompt("Enter how many sided dice to roll"))
function rolldice(maxRoll) {
    const roll = Math.floor(Math.random() * maxRoll) + 1;
    return roll;
}

let myString = "";
let result = 0;
do {
    result = rolldice(maxRoll);
    myString += "\t<li>"+ result + "</li>\n";
} while (result < maxRoll);
document.querySelector('#target').innerHTML = myString;
