console.log("linked done");


const todoForm = document.querySelector(".form-todo");
console.log(todoForm);

const todoInput = document.querySelector(".form-todo input[type='text']");
console.log(todoInput);

const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    console.log(todoInput.value);

    const newTodoText = todoInput.value ;

    const newLi = document.createElement("li");

    // console.log(newLi);

    const newLiInnerHtml = `
        <span class="text"> ${newTodoText} </span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`

    newLi.innerHTML = newLiInnerHtml ;

    console.log(newLi);

    todoList.appendChild(newLi);

    todoInput.value = "";

});


todoList.addEventListener("click", (e)=>{
    console.log(e.target);

    console.log(e.target.textContent);

    let x = e.target.textContent;
    console.log(x);
    

    if( x == "Done" ){
        const libtn = e.target.parentNode;
        console.log(libtn);
        const lispan = libtn.parentNode;
        console.log(lispan);
        
        const y = lispan.querySelector("span")
        console.log(y);

        const ans = y.innerHTML ;
        console.log(ans);

        y.style.textDecoration = "line-through";
       
    };

   if ( x == "Remove") {
        const removeTarget = e.target.parentNode ;
        console.log(removeTarget);

        const removeParent = removeTarget.parentNode ;
        console.log(removeParent);

        removeParent.remove();
    }
});




