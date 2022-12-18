let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');

cookie.onmousedown = () => {
    cookie.width += 20;
    clickerCounter.textContent++;   
}

cookie.onmouseup = () => {
    cookie.width -= 20;
}