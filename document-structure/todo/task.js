taskList = document.getElementById('tasks__list');

taskForm = document.getElementById('tasks__form')
taskForm.onsubmit = () => {
    taskValue = taskForm.querySelector('.tasks__input').value.trim();
    if (taskValue != '') {
        taskList.innerHTML += `
            <div class="task">
                <div class="task__title">` +
                    taskValue
                + `</div>
                <a href="#" class="task__remove">&times;</a>
            </div>`;
        
        Array.from(taskList.querySelectorAll('.task__remove')).forEach(element => {
            element.onclick = (elem) => {
                console.log('1111');
                taskList.removeChild(elem.srcElement.parentElement);
                return false;
            }
        })
    }

    return false;
}






// 