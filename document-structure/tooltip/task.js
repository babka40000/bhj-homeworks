Array.from(document.getElementsByClassName('has-tooltip')).forEach(element => {
    tip = document.createElement('div');
    tip.classList.add('tooltip');
    tip.textContent = element.title;
    element.insertAdjacentElement("beforeend", tip);

    element.onclick = () => {
        tip = Array.from(element.getElementsByClassName('tooltip'))[0];
        tip.classList.add('tooltip_active');
        tip.setAttribute('style', 'left: ' + element.offsetLeft + 'px; top: ' + (element.offsetTop - Math.round(window.scrollY)+25) + 'px');

        return false;
    }

    element.onmouseout = () => {
        tip = Array.from(element.getElementsByClassName('tooltip'))[0];
        if (tip.classList.contains('tooltip_active')) {
            tip.classList.remove('tooltip_active');
        }       
    } 
})