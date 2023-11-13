'use strict';
function rolldice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

let myString = "";
let result = 0;
do {
    result = rolldice();
    myString += "\t<li>"+ result + "</li>\n"
} while (result < 6);
document.querySelector('#target').innerHTML = myString
