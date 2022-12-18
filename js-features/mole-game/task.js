dead = document.getElementById('dead');
lost = document.getElementById('lost');

function clearCounter() {
    dead.textContent = 0;
    lost.textContent = 0;
}

for (let i=1; i<=9; i++) {
    let elem = document.getElementById('hole' + i);
    elem.onclick = () => {
        if (elem.classList.contains('hole_has-mole')){
            dead.textContent++;
            if (dead.textContent == 10) {
                alert('Вы выиграли');
                clearCounter();
            }    
        } else {
            lost.textContent++;
            if (lost.textContent == 5) {
                alert('Вы проиграли');
                clearCounter();
            }
        }
    }
}