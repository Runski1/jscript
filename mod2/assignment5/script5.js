'use strict';
let numbers = [];
let num;
let i = true;
do {
    num = Number(prompt("Giv numbers"))
    for (let j = 0; j < numbers.length; j++) {
        if (num == numbers[j]) {
            i = false;
            alert(num + "has already been input.");
            break;
        }
    }
    if (i == true) {numbers.push(num);}
} while (i==true);
numbers.sort(function(a, b) {return a - b});
for (let k = 0; k < numbers.length; k++) {
    console.log(numbers[k]);
}
