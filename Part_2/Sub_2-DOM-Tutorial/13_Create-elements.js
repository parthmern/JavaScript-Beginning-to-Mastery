// Create elements
// append -- add in the LAST
// prepend -- add in the START
// remove -- remove any element
//------------------------------------------

const newTodoItem = document.createElement("li");  //----> create the element
console.log(newTodoItem); //<li></li>

const newTodoItemText = document.createTextNode("Teach students"); //----> create text node
// newTodoItem.textContent = "teach student" ;  //----> create text content
console.log(newTodoItemText); // Teach students
 
newTodoItem.appendChild(newTodoItemText);

const todoList = document.querySelector(".todo-list");
todoList.appendChild(newTodoItem);

//------------------------------------------------------

todoList.prepend(newTodoItem);

//--------------------------------------------------

const todo1 = document.querySelector('.todo-list li');
todo1.remove();
console.log(todo1)

//==========================================================================
//==========================================================================

//before 
//after

const newTodoItem1 = document.createElement("li");
newTodoItem1.textContent = "Teach students";
const todoList1 = document.querySelector(".todo-list");
todoList1.after(newTodoItem1); //---> todolist1 se pehle newTododItem1 inster karna hai

