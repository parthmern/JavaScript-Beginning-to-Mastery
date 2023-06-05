//More discussion about proto and prototype
//------------------------------------------

let numbers = [1,2,3];

console.log(Object.getPrototypeOf(numbers));

console.log(Array.prototype);  // array ka prototype is always array

console.log(numbers);

function hello(){
    console.log("hello");
}

