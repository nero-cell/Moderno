'use strict';

let menu = document.querySelector('.menu');
let burger = document.querySelector('.header__burger');
let clickedImageClose = document.querySelector('.clicked-image__close');

burger.onclick = function() {
    let bodyWidth = document.body.offsetWidth;
    
    menu.classList.add('active');

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `
    ${document.body.offsetWidth - bodyWidth}px`;
};

menu.onclick = function() {
    menu.classList.remove('active');
    setTimeout(overflowAuto, 500);
};

clickedImageClose.onclick = function() {
    let clickedImage = document.querySelector('.clicked-image');
    clickedImage.style.display = 'none';
};

function overflowAuto() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
}