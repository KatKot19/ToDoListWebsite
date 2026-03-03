const list = document.querySelector("#taskList");

export function render(tasks, onDelete, onToggle) {
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", () => {
            onToggle(task.id);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            onDelete(task.id);
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}