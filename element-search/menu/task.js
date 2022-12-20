menuLinks = document.getElementsByClassName('menu__link');
let elements = Array.from(menuLinks);

elements.forEach(element => {element.onclick = () => {
        const menuSub = element.closest('.menu__item').getElementsByClassName('menu_sub');
        if (menuSub.length == 0) {

        } else {
            Array.from(menuSub)[0].classList.add('menu_active');
            return false;
        }
    }
});