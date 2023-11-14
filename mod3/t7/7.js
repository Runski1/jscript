'use strict';
const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target');
function highlight(){
    target.src = 'img/picB.jpg';
}
function setNormal(){
    target.src = 'img/picA.jpg';
}
trigger.addEventListener('mouseover', highlight);
trigger.addEventListener('mouseout', setNormal);