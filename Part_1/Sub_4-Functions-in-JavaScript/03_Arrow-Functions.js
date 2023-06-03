// Arrow Functions

//---------------------------------

//function declaration
function singHappyBirthday(){
    console.log("happy birthday to you ......");
}

singHappyBirthday();

//changing to function expression
const singHappyBirthday1 = function(){
    console.log("happy birthday to you ......");
}

singHappyBirthday1();

//chaingin to Arrow Functions
const singHappyBirthday2 = () => {
    console.log("happy birthday to you ......");
}

singHappyBirthday2();

//shortcut in arrow
// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0;

console.log(isEven(4)); //true