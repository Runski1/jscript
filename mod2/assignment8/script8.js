'use strict';
const myArray = ['me', 'myself', 'I'];
function concat(arr) {
    let myStr = "";
    for (let i = 0; i < arr.length; i++) {
        myStr += arr[i];
    }
    return myStr;
}
document.querySelector('#target').innerHTML = concat(myArray);


