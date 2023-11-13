'use strict';
const numbers = [1,2,3,4,5,6,7,8,9];
function even(nums) {
    const even_numbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            even_numbers.push(numbers[i]);
        }
    }
    return even_numbers
}
console.log(numbers, even(numbers));

