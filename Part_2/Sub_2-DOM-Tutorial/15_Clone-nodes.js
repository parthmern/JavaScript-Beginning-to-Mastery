//Clone nodes

const ul = document.querySelector(".todo-list");

const li = document.createElement("li");

li.textContent = "new todo";

const cloneLi = li.cloneNode(true);  // ---> true = deep cloning matlab child b clone honge <li> k

ul.append(li);

ul.prepend(cloneLi);
