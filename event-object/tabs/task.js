tabs = Array.from(document.getElementsByClassName('tab'));
tabContents = Array.from(document.getElementsByClassName('tab__content'));

tabs.forEach((element, index) => {
    element.addEventListener('click', () => {
        currentTabIndex = tabs.findIndex(element => element.classList.contains('tab_active'));

        tabs[currentTabIndex].classList.remove('tab_active');
        tabContents[currentTabIndex].classList.remove('tab__content_active');

        tabContents[index].classList.add('tab__content_active');
        element.classList.add('tab_active')})    
});