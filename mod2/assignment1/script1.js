'use strict';
let userInput = "";
const myList = [];
let i = 0;
while (i < 5) {
	userInput = prompt("Give a number");
	myList.push(userInput);
	i++;
}
for (i = 4; i >= 0; i--) {
	console.log(myList[i]);
}
