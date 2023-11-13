'use strict';
const userName = prompt("Enter a name");
const randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);
let house;
switch (randomNumber) {
    case 0:
    house = 'Gryffindor';
    break;
    case 1:
    house = 'Slytherin';
    break;
    case 2:
    house = 'Hufflepuff';
    break;
    case 3:
    house = 'Ravenclaw';
    break;
}

document.querySelector('#target').innerHTML = userName + ", you are " + house + ".";
