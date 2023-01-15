let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

items = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE) {
        document.getElementById('loader').classList.remove('loader_active');

        valutes = JSON.parse(xhr.responseText).response.Valute;

        for (var key in valutes) {
            items.innerHTML += `
                <div class="item">
                    <div class="item__code">
                        ` + valutes[key].CharCode +`
                    </div>
                    <div class="item__value">
                        ` + valutes[key].Value + `
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
            </div>`
        }
    }
})