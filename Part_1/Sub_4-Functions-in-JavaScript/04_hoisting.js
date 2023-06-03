// hoisting  -- calling the function before declaring the function
// because JS ENGINE first read all function in program then it will go above

// Function declarations are hoisted

// only can work in FUNCTION DECLARATION 
// cannot work in expression and arrow


hello(); // calling the function before declaring the function

function hello(){
    console.log("hello world");
}



