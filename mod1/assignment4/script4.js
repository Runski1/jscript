'use strict';
const userName = prompt("Enter a name");
const randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);
let house;
switch (randomNumber) {
    case 1:
    house = 'Gryffindor';
    break;
    case 2:
    house = 'Slytherin';
    break;
    case 3:
    house = 'Hufflepuff';
    break;
    case 4:
    house = 'Ravenclaw';
    break;
}

document.querySelector('#target').innerHTML = userName + ", you are " + house + ".";