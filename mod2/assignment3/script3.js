'use strict';
const dogs = []
for (let i = 1; i <= 6; i++) {
    dogs.push(prompt("Give name of dog "+ i));
}
dogs.sort().reverse();
let myStr = "";
for (let i = 0; i < dogs.length; i++) {
    myStr += "\t<li>" + dogs[i] + "</li>\n";
}
document.querySelector("#target").innerHTML = myStr