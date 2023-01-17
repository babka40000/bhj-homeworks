const robotAnswer = ['Я еще сплю!', 'Что вам нужно?', 'Идите баиньки', 'Нет настроения продолжать разговор', 'Все операторы заняты, оставайтесь на линии (нет)'];

const chatWidget = Array.from(document.getElementsByClassName('chat-widget'))[0];
chatWidget.onclick = () => {
    chatWidget.classList.add('chat-widget_active');
}

const chatWidgetInput = document.getElementById('chat-widget__input');
chatWidgetInput.addEventListener('keydown', (element) => {
    if (element.key == 'Enter') {
        const chatValue = chatWidgetInput.value.trim()
        if (chatValue != '') {
            currentDate = new Date();

            const answer = robotAnswer[Math.floor(Math.random() * 5)];

            const message= document.getElementById('chat-widget__messages')

            message.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">` + currentDate.getHours() + ':' + currentDate.getMinutes() + `</div>
                    <div class="message__text">
                    ` + chatValue + `    
                    </div>
                </div>`;

            message.innerHTML += `
                <div class="message">
                    <div class="message__time">` + currentDate.getHours() + ':' + currentDate.getMinutes() + `</div>
                    <div class="message__text">
                    ` + answer + `    
                    </div>
                </div>`; 
                
            chatWidgetInput.value = '';
        }
    } 
})