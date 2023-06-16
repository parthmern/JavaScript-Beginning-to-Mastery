const r = document.querySelector(".rock");
console.log(r);

const p = document.querySelector(".paper");
console.log(p);

const s = document.querySelector(".scissors");
console.log(s);

const main = document.querySelector("main");

let myArray = ['rock', 'paper', 'scissors'];    

main.addEventListener("click",function(e){
    e.preventDefault();

    const x = e.target;

    console.log(x);

    const y = e.target.classList.value ;

    console.log(y);

    const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    console.log("random =" , myArray[Math.floor(Math.random() * myArray.length)]);

    if(e.target.classList.value == randomElement){
        alert(`you have selected = ${y} and the bot have selected = ${randomElement} so final result == WON - hurrah!! won`);
    }

    else{
        alert(`you have selected = ${y} and the bot have selected = ${randomElement} so final result == LOOSE - sad!! try again`);
    }


})


