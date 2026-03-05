import { getTasks, addTask, deleteTask, toggleTask } from "./state.js";
import { renderTasks } from "./ui.js";

const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

function handleAdd() {
    const text = input.value.trim();
    if (text === "") return;
    addTask(text);
    renderTasks(getTasks());
    input.value = "";
}

function handleListClick(e) {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);
    if (e.target.tagName === "BUTTON") {
        deleteTask(id);
    } else {
        toggleTask(id);
    }
    renderTasks(getTasks());
}

addBtn.addEventListener("click", handleAdd);
taskList.addEventListener("click", handleListClick);

renderTasks(getTasks());