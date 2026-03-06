import { saveTasks, loadTasks } from "./storage.js";

let tasks = loadTasks();

export function getTasks() {
    return tasks;
}

export function addTask(text) {
    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
}

export function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
}

export function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
        if (!task) {
        console.warn("Task not found for id:", id);
        return;
    }
    task.completed = !task.completed;
    saveTasks(tasks);
}