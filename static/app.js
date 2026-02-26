const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskElement(task) {
    const listItem = document.createElement("li");
    listItem.textContent = task.text;
    if (task.completed) {
        listItem.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        listItem.remove();
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks();
    });

    listItem.addEventListener("click", function () {
        listItem.classList.toggle("completed");
        const t = tasks.find(t => t.id === task.id);
        t.completed = !t.completed;
        saveTasks();
    });

    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
}

addBtn.addEventListener("click", function () {
    const text = input.value.trim();
    if (text === "") return;

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    createTaskElement(newTask);
    saveTasks();
    input.value = "";
});

tasks.forEach(createTaskElement);