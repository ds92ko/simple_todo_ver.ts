// ADD button click Event
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length === 0) {
        alert("Please Enter a Task");
    }
    else {
        //create task list
        var inputVal = document.querySelector('#newtask input').value;
        var newTask = '<div class="task">' +
            '<span id="taskname">' +
            inputVal +
            '</span>' +
            '<button class="delete">' +
            '<i class="far fa-trash-alt"></i>' +
            '</button>' +
            '</div>';
        document.querySelector('#tasks').innerHTML += newTask;
        // delete list click Event
        var current_tasks = document.querySelectorAll('.delete');
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
                bgResize();
            };
        }
        // completed list click Event
        var tasks = document.querySelectorAll('.task');
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            };
        }
        //value init
        document.querySelector("#newtask input").value = '';
    }
    focusInput();
    bgResize();
};
// Input focus
function focusInput() {
    document.querySelector('#newtask input').focus();
}
setTimeout(focusInput, 100);
// ADD Enter key Event
document.querySelector('#newtask input').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        document.querySelector('#push').click();
    }
});
//body background resize
function bgResize() {
    var winH = window.innerHeight;
    var body = document.querySelector('body');
    var containerH = document.querySelector('.container').getBoundingClientRect().height;
    if (winH > containerH) {
        body.style.height = '100vh';
    }
    else if (winH <= containerH) {
        body.style.height = '100%';
    }
}
window.addEventListener('resize', function () {
    bgResize();
});
setTimeout(bgResize, 100);
