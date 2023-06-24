const timerE1 = document.getElementById('timer');
console.log(timerE1);

const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");

let count = 0;

let sec = 0 ;
let min = 0 ;
let hr = 0 ;
let ms = 0 ;

let timer = true;

function startTimer(){
    console.log("timer start ");
    timer = true;

    main();

}

function stopTimer(){
    console.log("timer stop ");
    timer = false ;
}

function resetTimer(){
    console.log("timer reset ");
    timer = false ;
    sec = 0 ;
    min = 0 ;
    hr = 0 ;
    ms = 0 ;
    count = 0;
    document.querySelector(".ms").innerHTML = "00" ;
    document.querySelector(".sec").innerHTML = "00" ;
    document.querySelector(".min").innerHTML = "00";
    document.querySelector(".hr").innerHTML = "00" ;

}


function main(){

    if(timer == true){

        count ++;
        document.querySelector(".ms").innerHTML = count ;

        setTimeout("main()",10);

        if(count == 99){
            count = 0;
            sec ++ ;
            document.querySelector(".sec").innerHTML = sec ;
        }

        if(sec == 59){
            sec = 0;
            min++;
            document.querySelector(".min").innerHTML = min ;
        }

        if(min == 59){
            min = 0;
            hr++;
            document.querySelector(".hr").innerHTML = hr ;
        }
    }

}

startbtn.addEventListener("click",startTimer);
stopbtn.addEventListener("click",stopTimer);
resetbtn.addEventListener("click",resetTimer);





