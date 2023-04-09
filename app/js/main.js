'use strict'

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');

    if (menu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});