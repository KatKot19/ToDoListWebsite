import { loadTasks, saveTasks } from "./storage.js";
import { state } from "./state.js";
import { renderTasks } from "./ui.js";

export function initApp() {
  const tasks = loadTasks();
  state.tasks = tasks;
  renderTasks(tasks);
}