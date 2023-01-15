let xhr = new XMLHttpRequest();

xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE) {
        const responseData = JSON.parse(xhr.responseText).data;

        document.getElementById('poll__title').innerText = responseData.title;

        const pollAnswers = document.getElementById('poll__answers');
        pollAnswers.innerHTML = '';

        responseData.answers.forEach(element => {
            pollAnswers.innerHTML += `
            <button class="poll__answer">
                ` + element + `
            </button>`;

            Array.from(pollAnswers.children).forEach(element => {
                element.onclick = () => {
                    alert('Ваш голос засчитан');
                }
            });
        })
    }    
})