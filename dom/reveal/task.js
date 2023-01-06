const revealList = document.getElementsByClassName('reveal');

window.onscroll = () => {
    Array.from(revealList).forEach(element => {
        const {top, bottom} = element.getBoundingClientRect();

        if (top < window.innerHeight && bottom > 0) {
            if (!element.classList.contains('reveal_active')) { 
                element.classList.add('reveal_active');
            }
        } else {
            if (element.classList.contains('reveal_active')) {
                element.classList.remove('reveal_active');
            }
        }
    })
}