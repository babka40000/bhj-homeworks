const sliders = Array.from(document.getElementsByClassName('slider__item'));

let counter = 0;

const arrowNext = document.querySelector('.slider__arrow_next');
arrowNext.onclick = () => {
    sliders[counter].classList.remove('slider__item_active');

    counter++;
    if (counter + 1 > sliders.length) {counter = 0};

    sliders[counter].classList.add('slider__item_active');
};

const arrowPrev = document.querySelector('.slider__arrow_prev');
arrowPrev.onclick = () => {
    sliders[counter].classList.remove('slider__item_active');

    counter--;
    if (counter < 0) {counter = sliders.length - 1};

    sliders[counter].classList.add('slider__item_active');
};