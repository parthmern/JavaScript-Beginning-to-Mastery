// block scope vs function scope 


// let and const are block scope
// var is function scope 

{
    let a = "parth";
    const b = "patel";

    var c ="matrix";
}

//console.log(a);  <---- ERROR because we cannot access let-const variables out of {}
//console.log(b);  <---- ERROR because we cannot access let-const variables out of {}

{
    // console.log(a);  <--- even we cannot acces them in another {}
    // console.log(b);
    
    console.log(c); // we can acces VAR in another {} + out of {}
}

console.log(c); // we can acces VAR in another {} + out of {}

//----------------------------------
//OUTPUT - matrix
//         matrix

//---------------------------------------------
//---------------------------------

function myApp(){

    if(true){
        let firstName = "parth";
        console.log(firstName);
    }

    // console.log(firstName); // <---- this will give ERROR

    if(true){
        var secName = "dhruv";
        console.log(secName);
    }

    console.log(secName); // <--- we can access this

}

myApp();

//console.log(secName); <-- we also cannot acces here VAR for doing acces we have to return value from function
