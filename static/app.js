const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = [];

function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => createTaskElement(task.text, task.completed));
    }
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskElement(text, completed = false) {
    const listItem = document.createElement("li");
    listItem.textContent = text;

    if (completed) {
        listItem.classList.add("completed");
    }

    listItem.addEventListener("click", function () {
        listItem.classList.toggle("completed");

        const task = tasks.find(t => t.text === text);
        task.completed = !task.completed;

        saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation();

        listItem.remove();

        tasks = tasks.filter(t => t.text !== text);

        saveTasks();
    });

    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
}

addBtn.addEventListener("click", function () {
    const text = input.value.trim();
    if (text === "") return;

    const taskObj = {
        text: text,
        completed: false
    };

    tasks.push(taskObj);

    createTaskElement(text, false);

    saveTasks();

    input.value = "";
});

loadTasks();
