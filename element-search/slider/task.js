const sliders = Array.from(document.getElementsByClassName('slider__item'));

const arrowNext = document.querySelector('.slider__arrow_next');
arrowNext.onclick = () => {
    currentSliderIndex = sliders.findIndex(element => element.classList.contains('slider__item_active'));
    
    sliders[currentSliderIndex].classList.remove('slider__item_active');

    currentSliderIndex++;
    if (currentSliderIndex + 1 > sliders.length) {currentSliderIndex = 0};

    sliders[currentSliderIndex].classList.add('slider__item_active');
};

const arrowPrev = document.querySelector('.slider__arrow_prev');
arrowPrev.onclick = () => {
    currentSliderIndex = sliders.findIndex(element => element.classList.contains('slider__item_active'));
    sliders[currentSliderIndex].classList.remove('slider__item_active');

    currentSliderIndex--;
    if (currentSliderIndex < 0) {currentSliderIndex = sliders.length - 1};

    sliders[currentSliderIndex].classList.add('slider__item_active');
};