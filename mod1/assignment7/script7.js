'use strict';
const diceCount = prompt("How many dice you want to roll?")
let diceTotal = 0
for (let i = 0; i < diceCount; i++) {
    diceTotal += Math.floor(Math.random() * 6) + 1;
}
document.querySelector('#target').innerHTML = "You rolled " + diceTotal;