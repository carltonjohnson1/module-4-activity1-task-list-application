// setting empty array for tasks

let tasks = [];


// Event listener for adding new task by running the function add Task on click
document.querySelector("#newTask").addEventListener("click", function (e) {
    addTask();
});

// function for adding a task

function addTask () {
    const taskInput = document.querySelector("#taskInput"); // getting the task input field
    const text = taskInput.value.trim(); // storing the value of taskinput in the text variable and removing any white space either side of the input

    if (text) {
        tasks.push({ text: text, completed: false }); // adding a new task and checking it's not already complete
        taskInput.value = "";// clearing the input field so the user can type in it again
        updateTasksList(); //calling the update Taskslist function to update the list with the new item
    }
};

// Marking a task as complete or incomplete and updating the list 
function toggleTaskComplete (index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
};


// deleting a task from the list and updating the list
function deleteTask (index) {
    tasks.splice(index,1);
    updateTasksList();
 
};

//allowing for editing of a task and then updatin the list
function editTask (index) {
    taskInput = document.querySelector("#taskInput");
    taskInput.value = tasks[index].text;
    tasks.splice(index,1);
    updateTasksList();
};


// displaying the task list correctly by rebuilding it properly when function is called
function updateTasksList() {
    const taskList = document.querySelector("#task-list");
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
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
        checkbox.addEventListener("change", function() {
            toggleTaskComplete(index);
        });

        taskList.appendChild(listItem);
    });
}


