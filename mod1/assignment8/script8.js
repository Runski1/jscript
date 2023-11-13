'use strict';
const startYear = Number(prompt("Enter start year"));
const endYear = Number(prompt("Enter end year"));
let year = startYear;
let myString = "";
while (year <= endYear) {
    switch (year % 4) {
        case 0:
            if (year % 100 === 0 && year % 400 !== 0) {
                break;
            } else {
                myString += "\t<li>" + year + "</li>\n";
                break;
            }
        default:
            break;
    }
    year++;
}
document.querySelector('#target').innerHTML =  myString;