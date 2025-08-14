
// storing tasks in empty array
let tasks = [];



// Adding event listener for  new task
document.querySelector("#newTask").addEventListener("click", function () {
    addTask();
});

// function to add a task
function addTask() {
    const taskInput = document.querySelector("#taskInput").value;
    // const text = taskInput.value.trim(); // get rid of white space either side of text

    if (taskInput) {
        tasks.push(taskInput); //adding task to list
        document.querySelector("#taskInput").value = "";
        updateTasksList(); //update the task list
    } 
};



// updatng list function


const updateTasksList = () => {
    const taskList = document.getElementById("task-list");
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

//

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();

};

const deleteTask = (index) => {
    tasks.splice(index,1);
    updateTasksList();

};

const editTask = (index) => {
    taskInput = document.querySelector("#taskInput");
    taskInput.value = tasks[index].text;

    tasks.splice(index,1);
    updateTasksList();
};


