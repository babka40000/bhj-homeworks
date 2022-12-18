let elem = document.getElementById('timer');
timer = elem.textContent;

interval = setInterval(() => {
    if(timer <= 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!!!');
        return;
    }
    
    timer -= 1;
    elem.textContent = timer;
  }, 1000);