// array destructuring 

const myArray = ["value1", "value2", "value3","value4"];
let myvar1 = myArray[0];
let myvar2 = myArray[1];

console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);

//-------------
//array destructuring shortcut in JS

let [myvarX, myvarY, ...myNewArray] = myArray ;

console.log("value of myvar1", myvarX); // "value1"
console.log("value of myvar2", myvarY); // "value2"
console.log("value of myvar2", myNewArray ); //"value3","value4"
