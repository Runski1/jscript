'use strict';
const numOfParticipiants = Number(prompt("How many participiants?"));
const participiants = []
for (let i = 1; i <= numOfParticipiants; i++) {
    participiants.push(prompt("Enter name for participiant " + i + ":"))
}
participiants.sort();
let myStr = "";
for (let i = 0; i < participiants.length; i++) {
    myStr += "<li>" + participiants[i] + "</li>\n";
}
document.querySelector('#target').innerHTML = myStr

