'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const targetElement = document.querySelector("#target")
for (let student of students) {
  let option = document.createElement('option');
  let attr = document.createAttribute('value');
  let name = document.createTextNode(student.name);
  attr.value = student.id;
  option.setAttributeNode(attr);
  option.appendChild(name);
  targetElement.appendChild(option);
}
