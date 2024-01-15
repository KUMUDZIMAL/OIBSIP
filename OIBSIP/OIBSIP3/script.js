function addTask() {
    let taskInputValue = document.getElementById("task-input");
    let pendingList = document.getElementById("pending-list");
    let completedList = document.getElementById("completed-list");

    if (taskInputValue.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerHTML = `
            ${taskInputValue.value}
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            <button class="complete-btn" onclick="completeTask(this)">Complete</button>
        `;
        pendingList.appendChild(li);
        taskInputValue.value = "";
    }
}

function deleteTask(button) {
    let li = button.parentElement;
    li.remove();
}

function completeTask(button) {
    let li = button.parentElement;
    let completedList = document.getElementById("completed-list");
    let pendingList = document.getElementById("pending-list");


    pendingList.removeChild(li);


    li.removeChild(li.lastChild); 
    li.innerHTML += '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
    completedList.appendChild(li);
}