// Insert adjacent elements

// elem.insertAdjacentHTML(where, html)

// beforebegin   -- starting se pehele
// afterbegin    -- starting k baad
// beforeend     -- end se pehle
// afterend      -- end k baad



const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li>Teach Students adjecent </li>");