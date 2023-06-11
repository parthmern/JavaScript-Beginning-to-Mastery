// Global Execution context - 2 
// hoisting 

console.log(this); //window object
console.log(window); //window object
console.log(myFunction); //myFunction(){console.log("this is my function");}

console.log(fullName); //undefined

function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit"; 
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName); //Harshit Sharma