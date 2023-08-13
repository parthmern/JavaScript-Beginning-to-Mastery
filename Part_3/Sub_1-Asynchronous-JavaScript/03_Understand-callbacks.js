// Understand callbacks in general

function func1(callback){
    console.log("in the FUNCTION 1 ");
    callback();
}

function func2(){
    console.log("in the FUNCTION 2 ");
}

func1(func2);

//---------------------------------------------------------------------

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

function onFail(){
    console.log("Wrong data type");
    console.log("please pass numbers only")
}


getTwoNumbersAndAdd(4, 4,addTwoNumbers, onFail);






