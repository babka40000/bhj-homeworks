const xhr = new XMLHttpRequest();
const welcome = document.getElementById('welcome');
const welcomeUser = document.getElementById('user_id');

document.forms.signin__form.onsubmit = event => {
    event.preventDefault();   
    
    let formData = new FormData(document.forms.signin__form);
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
}

xhr.onload = () => {
    if (xhr.status = 200) {

        answer = JSON.parse(xhr.responseText);

        if (answer.success) {
            localStorage.userId = answer.user_id;

            document.getElementById('signin').classList.remove('signin_active');

            welcome.classList.add('welcome_active');
            welcomeUser.textContent = answer.user_id;
        } else {
            alert('Неверный логин\\пароль');
        }
    } else {
        alert('Не верный логин\]пароль');
    }   
}

window.onload = () => {
    userId = localStorage.userId;
        if (userId) {
            document.getElementById('signin').classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            welcomeUser.textContent = userId;
        }
}