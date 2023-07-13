let root = document.getElementById("root");
let allTodos = [
  //   {
  //     name: "play basketball",
  //     isDone: false,
  //   },
];

const createTodo = (arr = allTodos) => {
  root.innerHTML = "";

  /* <li class="todo flex">
<div class="flex">
  <input class="checkbox" type="checkbox" />
  <h2 class="disable">Play Basketball</h2>
</div>

<button class="close-btn">❌</button>
</li> */

  return arr.map((todo, i) => {
    let li = document.createElement("li");
    li.classList.add("todo", "flex");
    let div = document.createElement("div");
    div.classList.add("flex");
    let checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("type", "checkbox");
    todo.isDone ? checkbox.setAttribute("checked", true) : "";

    checkbox.addEventListener("click", () => {
      todo.isDone = !todo.isDone;
      createTodo();
    });

    let h2 = document.createElement("h2");
    todo.isDone ? h2.classList.add("disable") : "";
    h2.innerText = todo.name;
    let button = document.createElement("button");
    button.classList.add("close-btn");
    button.innerText = "❌";
    button.addEventListener("click", () => {
      arr.splice(i, 1);
      createTodo();
    });

    div.append(checkbox, h2);
    li.append(div, button);
    root.append(li);
  });
};

let searchInput = document.querySelector(".search-bar");
let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if ((e.keyCode = "13")) {
    allTodos.push({ name: searchInput.value, isDone: false });

    searchInput.value = "";
  }

  createTodo();
});

createTodo();

console.log(allTodos);
