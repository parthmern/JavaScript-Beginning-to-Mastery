// map method -- working like ForEach but make the NEW ARRAY of *return value
//return is must while using map function
// array.map(callbackfunction);

const numbers = [3,4,6,1,8];

function myFunc(number){
    return number*number ;
}

const sqNum = numbers.map(myFunc);
console.log(sqNum);

const sqNum1 = numbers.map(function myFunc1(num){
    return num*num ;
});
console.log(sqNum1);  // <---- GIVE NEW ARRAY