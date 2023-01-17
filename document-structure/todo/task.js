taskList = document.getElementById('tasks__list');

taskForm = document.getElementById('tasks__form')
taskForm.onsubmit = () => {
    taskValue = taskForm.querySelector('.tasks__input').value.trim();
    if (taskValue != '') {

        taskList.insertAdjacentHTML('beforeend', `
            <div class="task">
                <div class="task__title">` +
                    taskValue
                + `</div>
                <a href="#" class="task__remove">&times;</a>
            </div>`);

        taskList.lastElementChild.querySelector('.task__remove').onclick = (elem) => {
            taskList.removeChild(elem.srcElement.parentElement);
            return false;
        }
            
        taskForm.querySelector('.tasks__input').value = '';
    }

    return false;
}