// little practice with click event

const allButtons = document.querySelectorAll(".my-buttons button");

console.log(allButtons); // NodeList(3) [button#one, button#two, button#three]

allButtons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "red";
    })
})