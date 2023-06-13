// this keyword
//This keyword inside eventListener callback


const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);  //<button class="btn btn-headline">Learn More</button>
});

// idhar(normal function) "this" ki value btn khud hai

// arrow function ka "this" ki value ek lvl up hoga matlab btn nhi hoga wo WINDOW ho jayegi




