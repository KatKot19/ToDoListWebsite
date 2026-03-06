import { getTasks, addTask, deleteTask, toggleTask } from "./state.js";
import { render } from "./ui.js";

const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");

function handleAdd() {
    const text = input.value.trim();
    if (text === "") return;
    addTask(text);
    render(getTasks(), handleDelete, handleToggle);
    input.value = "";
}

function handleDelete(id) {
    deleteTask(id);
    render(getTasks(), handleDelete, handleToggle);
}

function handleToggle(id) {
    toggleTask(id);
    render(getTasks(), handleDelete, handleToggle);
}

render(getTasks(), handleDelete, handleToggle);

addBtn.addEventListener("click", handleAdd);