'use strict';
const diceCount = Number(prompt("How many dice you want to roll?"));
const eyeNumber = Number(prompt("What total roll you want to know about?"));
let wantedRollCount = 0;
let totalRoll;
for (let i = 0; i < 10000; i++) {
    totalRoll = 0;
    for (let j = 1; j <= diceCount; j++) {
        totalRoll += Math.floor(Math.random() * 6 + 1);
    }
    if (totalRoll === eyeNumber) {
        wantedRollCount++;
    }
}
const chance = ((wantedRollCount / 10000) * 100);
document.querySelector('#target').innerHTML = "Chance to roll " + eyeNumber + " with " + diceCount + " dice is about " + chance + "%."