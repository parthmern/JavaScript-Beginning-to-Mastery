// live list vs static list

// querySelectorAll hamein static list degi
// getElementsBySomething hain live list degi


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li"); 

console.log(listItems); // htmlcolllection [li] ---> static list : hum add kar rhe <li> uske baad fir nhi idhar nhi dikha rha hai

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems); // htmlcolllection [li,li]


//--------------------------------