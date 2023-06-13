//Intro to events

// event -> click - when i click on buttenthat time some actio=n will be happen

// event add karne ke 3 tarike hai 
// 1) go the the html and in <button> then in the attribute do this => onclick = "console.log('you clicke don me')";
// ==> event("----js script----")

// 2) 
const btn = document.querySelector(".btn-headline");
console.log(btn); //<button class="btn btn-headline">Learn More</button>

btn.onclick = function(){console.log("you clicked on me")};

// 3) method --- addEventListener
// elem.addEventListner("event",callbackFunction)

btn.addEventListener("click",function(){console.log("hey clickdone");});


// btn.addEventListener("click", ()=>{
//     console.log("arrow function !!!")
// });



