// Add new HTML elements to page 

// innerHTML to add html element

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);  // <li>...........</li>

todoList.innerHTML = "<li>New Todo 2 </li>";  //replacing
todoList.innerHTML += "<li>New Todo </li>";   //adding
todoList.innerHTML += "<li>teach students </li>";


// AVOID this because it decrease the spped of excecution. SO prefer to use document.createElement()


// when you should use it , when you should not
// todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>');

