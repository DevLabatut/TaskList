document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

  addTaskBtn.addEventListener("click", addTask);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTaskToList(taskText);
      taskInput.value = "";
    }
  }

  function addTaskToList(taskText) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const taskTextSpan = document.createElement("span");
    taskTextSpan.classList.add("task-text");
    taskTextSpan.textContent = taskText;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("taskitem-buttons");

    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add("edit-task");

    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = '<i class="fas fa-check"></i>';
    toggleButton.classList.add("toggle-completion");

    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    removeButton.classList.add("remove-task");

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(toggleButton);
    buttonsDiv.appendChild(removeButton);

    li.appendChild(taskTextSpan);
    li.appendChild(buttonsDiv);
    taskList.appendChild(li);
  }

  function toggleTaskCompletion(task) {
    task.classList.toggle("task-completed");
  }

  function removeTask(task) {
    task.remove();
  }

  function editTask(task) {
    const taskTextSpan = task.querySelector(".task-text");
    const newText = prompt("Editar tarefa:", taskTextSpan.textContent.trim());
    if (newText !== null && newText.trim() !== "") {
      taskTextSpan.textContent = newText.trim();
    }
  }

  taskList.addEventListener("click", function (event) {
    const clickedElement = event.target;

    if (clickedElement.closest(".edit-task")) {
      const taskItem = clickedElement.closest(".task-item");
      editTask(taskItem);
    }

    if (clickedElement.closest(".toggle-completion")) {
      const taskItem = clickedElement.closest(".task-item");
      toggleTaskCompletion(taskItem);
    }

    if (clickedElement.closest(".remove-task")) {
      const taskItem = clickedElement.closest(".task-item");
      removeTask(taskItem);
    }
  });
});
