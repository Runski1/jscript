'use strict';
const targetElement = document.querySelector('#target');
const names = ['John', 'Paul', 'Jones'];
for (let firstName of names) {
    let listItem = document.createElement('li');
    let textNode = document.createTextNode(firstName);
    listItem.appendChild(textNode);
    targetElement.appendChild(listItem);
}
const secondItem = targetElement.getElementsByTagName('li')[1];
secondItem.classList.add('my-item');