const open = document.querySelector('#open');
const modal__container = document.querySelector('#modal__container');
const close = document.querySelector('#close');

open.addEventListener('click', () => {
    modal__container.classList.add('show');
})

close.addEventListener('click', () => {
    modal__container.classList.remove('show');
})