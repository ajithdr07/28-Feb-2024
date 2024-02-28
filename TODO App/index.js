const instructionsLink = document.querySelector(".instructions-link");
const closeInstrBtn = document.querySelector(".close-instr");
const userInput = document.getElementById("user-input");
const addBtn = document.getElementById("add");
const todosContainer = document.getElementById("todos");

let todos = JSON.parse(localStorage.getItem("todos") || "[]");
todos.forEach((todo) => addTodo(todo));

addBtn.addEventListener("click", function (e) {
  const userInputValue = userInput.value.trim();
  if (userInputValue != "") {
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    todos.push({ id, text: userInputValue });
    localStorage.setItem("todos", JSON.stringify(todos));
    addTodo({ id, text: userInputValue });
  }
});

function addTodo({ id, text }) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  const todoContent = document.createElement("p");
  const delBtn = document.createElement("button");

  todoContent.textContent = text;
  delBtn.textContent = "X";

  todoItem.appendChild(todoContent);
  todoItem.appendChild(delBtn);

  todoContent.addEventListener("click", function (e) {
    const newTodoContent = prompt(this.textContent);
    if (newTodoContent.trim() != "") {
      this.textContent = newTodoContent.trim();
      todos = todos.map((todo) => {
        if (todo.id == id) {
          todo.text = newTodoContent.trim();
        }
        return todo;
      });

      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });

  delBtn.addEventListener("click", function (e) {
    todos = todos.filter((todo) => todo.id != id);
    localStorage.setItem("todos", JSON.stringify(todos));
    e.target.parentElement.remove();
  });

  todosContainer.append(todoItem);
  userInput.value = "";
}

instructionsLink.addEventListener("click", () => {
  document.querySelector(".instructions").style.display = "block";
});

closeInstrBtn.addEventListener("click", () => {
  document.querySelector(".instructions").style.display = "none";
});
