setInterval(() => {
    Array.from(document.getElementsByClassName('rotator__case_active')).forEach(element => {
        element.classList.remove('rotator__case_active')
        nextElement = element.nextElementSibling;
        if (nextElement == null) {
            element.parentElement.firstChild.nextSibling.classList.add('rotator__case_active');
        } else {
            nextElement.classList.add('rotator__case_active');
        }
    })
}, 1000)