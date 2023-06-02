//Falsy value -- false,null,"",undefined,0

let a = "";

if(a){
    console.log("truthy value");
}
else{
    console.log("Falsy value") // OP == Falsy value
}

let b = undefined;

if(b){
    console.log("truthy value");
}
else{
    console.log("Falsy value") // OP == Falsy value
}

//-----------------------------------------------
//TRUTHY value - the value that is not falsy

let c = 4;

if(c){
    console.log("truthy value");
}
else{
    console.log("Falsy value") // OP == truthy value
}
