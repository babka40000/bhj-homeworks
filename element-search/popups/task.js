const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalClose = document.getElementsByClassName('modal__close');
let elems = Array.from(modalClose);
elems.forEach(elem => {elem.onclick = () => {elem.closest('.modal').classList.remove('modal_active')}});

const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.getElementsByClassName('show-success');

elems = Array.from(showSuccess);
elems.forEach(elem => {elem.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active')
}});
