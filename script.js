// setting empty array for tasks

let tasks = [];


function addTask () {
    const taskInput = document.querySelector("#taskInput");
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTasksList();
    }
};

function toggleTaskComplete (index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();

};

function deleteTask (index) {
    tasks.splice(index,1);
    updateTasksList();
 
};

function editTask (index) {
    taskInput = document.querySelector("#taskInput");
    taskInput.value = tasks[index].text;

    tasks.splice(index,1);
    updateTasksList();

};


function updateTasksList () {
    const taskList = document.querySelector("#task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? "completed" : ""}">
                <input type="checkbox" class="checkbox" ${
                    task.completed ? "checked" : ""
                } />
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <img src="images/edit.svg" onclick="editTask(${index})" />
                <img src="images/bin.svg" onclick="deleteTask(${index})" />
            </div>
        </div>
        `;

        // Add checkbox event
        const checkbox = listItem.querySelector(".checkbox");
        checkbox.addEventListener("change", () => toggleTaskComplete(index));

        taskList.appendChild(listItem);
    });
};


// Submit event
document.querySelector("#newTask").addEventListener("click", function (e) {
    e.preventDefault();
    addTask();
});
