const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerText = taskText;

  // Complete Task on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete Button
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // li click ko block kare
    li.remove();
  });

  li.appendChild(delBtn);
  todoList.appendChild(li);

  todoInput.value = ""; // input clear
});
