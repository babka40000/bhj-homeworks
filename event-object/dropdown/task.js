
const dropdownValue = document.querySelector('.dropdown__value');
const dropDown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
})

Array.from(dropdownItems).forEach(element => {
    element.onclick = () => {
        dropdownList.classList.toggle('dropdown__list_active');
        const dropdownLink = element.querySelector('.dropdown__link');
        dropdownValue.textContent = dropdownLink.textContent;
        return false;
    }
})