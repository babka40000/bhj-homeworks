editor = document.getElementById('editor'); 

editor.oninput = () => {
    localStorage.editorText = editor.value;
}  

window.onload = () => {
    if (localStorage.editorText) {
        editor.value = localStorage.editorText;
    }
}