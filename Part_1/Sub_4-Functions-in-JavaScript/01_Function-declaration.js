//Functions declaration

//- like servent in the program
//- when we have to perfrom similar task for multiple times
//---------------------------------------

//1)) simple function
function singHappyBirthday() {
    console.log("happy bd . ......");
}

singHappyBirthday(); // calling function

//---------------------------------------
//2)) RETURN function
function sum(){
    return 2+4 ;
}

// function sum(){
//     x = 2+4 ;
//     return x;
// }

// console.log(sum()); //6

console.log(sum()); // 6 <---Returned value

let b = sum() ; 
console.log(b); // 6 <---Returned value

//---------------------------------------
//3)) PARAMETER technique = DRY-do not repeate yourself
// Parameter => (num1,num2)
// arguments => 5 and 4 values that we are provied

function minus(num1,num2){
    return (num1-num2);
}

let returnedMinusFun = minus(5,4); //(num1=5 and num2=4)
console.log(returnedMinusFun); //1