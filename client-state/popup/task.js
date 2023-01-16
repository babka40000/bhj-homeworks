const subscribeWindow = document.getElementById('subscribe-modal');


window.onload = () => {
    if (!document.cookie.includes('isClose')) {
        subscribeWindow.classList.add('modal_active');
    }

    console.log(document.cookie);
}

document.querySelector('.modal__close_times').onclick = () => {
    document.cookie = 'isClose=true';
    subscribeWindow.classList.remove('modal_active');

    console.log(document.cookie);
}