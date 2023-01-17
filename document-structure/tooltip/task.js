Array.from(document.getElementsByClassName('has-tooltip')).forEach(element => {
    let tip = document.createElement('div');
    tip.classList.add('tooltip');
    tip.textContent = element.title;
    element.insertAdjacentElement("beforeend", tip);

    element.onclick = () => {
        tip = Array.from(element.getElementsByClassName('tooltip'))[0];
        tip.classList.toggle('tooltip_active');
        tip.setAttribute('style', 'left: ' + element.offsetLeft + 'px; top: ' + (element.offsetTop - Math.round(window.scrollY)+25) + 'px');

        return false;
    }
})