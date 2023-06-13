// Add events on multiple elements

const allButtons = document.querySelectorAll(".my-buttons button");

console.log(allButtons); //NodeList(3) [button#one, button#two, button#three]

for(let button of allButtons){
    button.addEventListener("click", function(){
        console.log("clicked done")
    })
}

for(let button of allButtons){
    button.addEventListener("click", function(){

        console.log(this); //<button id="one">My Button one</button>

        console.log(this.textContent);  // My Button one
    })
}

//--------------------------------------------------------------

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }


// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })