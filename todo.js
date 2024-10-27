document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  taskSpan.addEventListener("dblclick", function () {
    const input = document.createElement("input");
    input.type = "text";
    input.value = taskSpan.textContent;

    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        taskSpan.textContent = input.value;
        taskItem.replaceChild(taskSpan, input);
      }
    });

    taskItem.replaceChild(input, taskSpan);
    input.focus();
  });

  taskSpan.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(taskItem);

  taskInput.value = "";
}
