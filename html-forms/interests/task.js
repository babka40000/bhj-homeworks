Array.from(document.getElementsByClassName('interest__check')).forEach(element => {
    element.onchange = () => {
        if (element.closest('.interests').classList.contains('interests_main')) {
            // не знаю, можно ли по правилам хорошего тона писать такие строки, но JS, как будто, подталкивает к этому
            Array.from(element.closest('.interest').getElementsByTagName('ul')[0].getElementsByClassName('interest__check')).forEach(childElem => {
                childElem.checked = element.checked;
            })  
        }
    }
})