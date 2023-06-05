//What is prototype
//simply object that provided by the function

//-----------------------------------


function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object


// name property ---> tells function name
console.log(hello.name); //hello

// you can add your own properties 
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty); //very unique value

// function provides more usefull properties.

//-------------------------------------------------
//functions provide some free space where we can add KEY-VALUE-PAIR which known as prototype
// **ONLY function provides prototype

console.log(hello.prototype); // {}    //op- {constructor: ƒ}

hello.prototype.abc = "parhu";
hello.prototype.xyz= "patel";
console.log(hello.prototype); //{abc: 'parhu', xyz: 'patel', constructor: ƒ}

console.log(hello.prototype.abc); // parhu

hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing()); //lalalla









