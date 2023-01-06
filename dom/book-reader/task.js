Array.from(document.getElementsByClassName('font-size')).forEach(element => {
    element.onclick = () => {
        Array.from(document.getElementsByClassName('font-size_active'))[0].classList.remove('font-size_active');
        element.classList.add('font-size_active');
        
        bookClassList = document.getElementById('book').classList;
        bookClassList.value = '';
        bookClassList.add('book');

        if (element.classList.contains('font-size_small')) {
            bookClassList.add('book_fs-small');
        } else if (element.classList.contains('font-size_big')) {
            bookClassList.add('book_fs-big');
        }
        
        return false;
    }
})