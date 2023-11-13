'use strict';
const numbers = [];
let num;
do {
    num = Number(prompt("Give numbers, 0 for stop this prompt."));
    numbers.push(num);
} while (num != 0);
numbers.sort(function(a, b){return a-b}).reverse();
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
