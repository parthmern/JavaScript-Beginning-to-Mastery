// callback functions 

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func and I can..")

    callback("harshit"); // calling myFunc2 with the value of name  = "harshit"

    // we can write any variable name insted of callback = a = b 
}


myFunc(myFunc2); // calling myFunc with value of callback = myFunc2

//OUTPUT 
// hello there I am a func and I can..
// inside my func 2
// your name is harshit
