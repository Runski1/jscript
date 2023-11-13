'use strict';
const names = ['John', 'Paul', 'Jones'];
let myString ="";
for (let name of names) {
    myString += `<li>${name}</li>\n`;
}
document.querySelector('#target').innerHTML = myString;