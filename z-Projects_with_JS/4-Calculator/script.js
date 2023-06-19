const x = document.querySelector(".onlybtns");
console.log(x);

const y = document.querySelector(".input");
console.log(y);

let string = "" ;
let ans = 0 ;

x.addEventListener("click", (e)=>{

    if(e.target.textContent == "=") {
        string = eval(string);
        console.log("equal working");

        string = string + "";
        console.log(typeof(string));

        y.value = string.substring(0,string.length) ;
    }


    console.log(e.target);
    

    let x = (e.target.innerHTML);
    console.log(x);
    
    
    string = string + x ;
    
    console.log(string);

   

    y.value = string ;

    if(e.target.textContent == "C") {
        string = "";
        y.value = string ;
        console.log("clear working");
    }

});

