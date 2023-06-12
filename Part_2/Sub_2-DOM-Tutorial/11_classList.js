// classList

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);  //DOMTokenList(2) ['section-todo', 'container']  ---> total classname that given to the element

sectionTodo.classList.add('bg-dark');
console.log(sectionTodo.classList);  // DOMTokenList(3) ['section-todo', 'container', 'bg-dark']

sectionTodo.classList.remove("container");
console.log(sectionTodo.classList); // DOMTokenList(2) ['section-todo', 'bg-dark']


// class exist or not
const ans = sectionTodo.classList.contains("container");
console.log(ans);  //false 

// TOGGLE -- if class available then remove it and if class isnot available then add it
sectionTodo.classList.toggle("bg-dark"); //ye class available hai to remove kar dega ise
console.log(sectionTodo.classList); //DOMTokenList ['section-todo']

sectionTodo.classList.toggle("newed-bg-dark");
console.log(sectionTodo.classList); //DOMTokenList(2) ['section-todo', 'newed-bg-dark']





