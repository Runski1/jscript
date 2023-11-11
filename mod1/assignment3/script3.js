'use strict';
let nums = prompt("Enter comma seperated numbers")
const num_array = nums.split(",")
let sum = 0
let product = 1
for (let i = 0; i < num_array.length; i++) {
    sum += Number(num_array[i]);
    product *= Number(num_array[i]);
}
let average = sum / num_array.length;
document.querySelector('#target').innerHTML = 'Sum: ' + sum + '<br>Product: '+ product + '<br>Average: ' + average;