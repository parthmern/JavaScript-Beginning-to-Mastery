const x = document.querySelector("main button");
console.log(x);

const b = document.querySelector("body");
console.log(b);

const txt = document.querySelector("body h1");
console.log(txt);

function randomcolorgenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    const randomcolor = `rgb(${red} ,${green} ,${blue})` ;

    return randomcolor;
}

x.addEventListener("click",function chnageBgColor(){
    const randomcolor = randomcolorgenerator();
    console.log(randomcolor);

    b.style.backgroundColor = randomcolor;

    txt.innerText = "Current color = " +  randomcolor;
})


