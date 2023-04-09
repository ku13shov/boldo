'use strict'

const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const loginBtn = document.querySelector('.menu__btn');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const close = document.querySelector('.modal__close');
const loginInput = document.querySelector('#login');

const overflowBody = (element) => {
    if (element.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
}

const removeActive = (element) => {
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    }
}

const closeModal = () => {
    modal.classList.remove('active');
    overflowBody(modal);
}

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');

    overflowBody(menu);
});

loginBtn.addEventListener('click', () => {
    modal.classList.add('active');
    loginInput.focus();

    removeActive(menu);
    removeActive(burger);
    overflowBody(modal);
});

close.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', closeModal);