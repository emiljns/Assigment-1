document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.classList.add("task-item"); // Custom class for styling

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button onclick="editTask(this)" class="edit-btn">Edit</button>
    <button onclick="removeTask(this)" class="delete-btn">X</button>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}

function editTask(button) {
  let li = button.parentElement;
  let taskSpan = li.querySelector(".task-text");
  let currentText = taskSpan.textContent;

  let newText = prompt("Edit task:", currentText); // Show a prompt to edit
  if (newText !== null && newText.trim() !== "") {
    taskSpan.textContent = newText; // Update task text
  }
}