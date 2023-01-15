const myForm = document.forms.form;

const progress = document.getElementById( 'progress' );

const xhr = new XMLHttpRequest();

myForm.addEventListener('submit', event => {
    event.preventDefault();

    let formData = new FormData(myForm);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);         
})

xhr.upload.addEventListener('progress', event => {
    progress.value = event.loaded / event.total;    
})

xhr.upload.addEventListener('load', event => {
    progress.value = 1;
})