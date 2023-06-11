// closures - the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// innerFunction wo outerFunction k variables ko access kar sakta hai


 
// function can return functions

function outerFunction(){
    console.log("you are in outer function");

    function innerFunction(){
        console.log("you are in Inner function");
    }

    return innerFunction;
}

let ans = outerFunction();

ans();

//new

function fullName(firstName,lastName){
    console.log("you are in outer function");

    function printName(){
        console.log(firstName,"-",lastName); //here not any variable but still there is RIGHT output
    }

    return printName;
}

let answer = fullName("parth","patel");

answer(); // parth - patel


//jab ek function dusre function ko return karta hai tab wo dusre wala(return wala) function dusre function k local variables saath leakr return hota hai
//idhar printName wala function firstName and lastName k variables lekar return hoga
