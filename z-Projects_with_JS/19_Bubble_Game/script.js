const btn = document.querySelectorAll(".round");
const main = document.querySelector(".main");
const scoreBoard = document.querySelector(".score");
const hitBoard = document.querySelector(".hit");
const timerBoard = document.querySelector(".timer");
const start = document.querySelector(".start");
let score = 0;
let hit;

// btn.addEventListener("click",(e)=>console.log("clicked",e.target.innerText));

function timer(){
    var sec = 30;
    var timer = setInterval(timeUpdate, 1000);

    function timeUpdate(){
        timerBoard.innerText = sec ;
        sec--;
        console.log(sec);
        
        if (sec < 0) {
            clearInterval(timer);
            main.innerHTML= `GAME OVER and YOUR FINAL SCORE IS - ${score}`;

            score = 0;
            scoreBoard.innerText = score;
            start.classList.remove("hidden");
        }
        
        }

}


const run = function() {

    //Hit value define
    hitGenerate();

    main.innerHTML= "";

    //random generate the ROUNDS
    for(let i = 0 ; i<50 ; i++){
        createRound();
    }
    
}


start.addEventListener("click",startFunc);
function startFunc(){
    run();
    timer();
    start.classList.add("hidden");
}


function hitGenerate(){
    hit = Math.round(Math.random()*10);
    hitBoard.innerText = hit ;
}



function createRound(){
    const txt = Math.round(Math.random()*10);
    console.log(txt);

    const round = document.createElement("div");
    round.className = "btnDiv";
    round.innerHTML = `
                        <button type="button" class="round">
                        <p>${txt}</p>
                        </button>
                      `;

    main.appendChild(round);

    round.addEventListener("click",checkedFunc);
}


//clicked then EVENTLISTNER
function checkedFunc(e){
    console.log("clciekd");
    let ans = e.target.innerText;
    // console.log(typeof(ans));

    ans = Number(ans);
    console.log(typeof(ans));
    

    if(ans==hit){
        score = score + 10;
        console.log(scoreBoard.innerText);
        scoreBoard.innerText = score;
    }
    

    else{
        score = score ;
        console.log(scoreBoard.innerText);
        scoreBoard.innerText = score;
    }

    main.innerHTML = "";
    run();
    
}

