//push pop faster than unshift shift
//----------------------------
//Push-- add new item in the end
//Pop -- remove last element + return removed element
//---------------------------------------------
//Unshift -- add element in the starting
//shift -- remove staring element + return removed element

let fruit=["apple","mango","345"];

fruit.push("banana");
console.log(fruit); // ['apple', 'mango', '345', 'banana']

fruit.pop();
console.log(fruit); //['apple', 'mango', '345'] + returns the 'banana'

let a = fruit.pop(); // ['apple', 'mango'] + returns the '345'
console.log(a);// 345 returned value

//------------------------------------------

let country=["india","china","123"];

country.unshift("canada");
console.log(country); //['canada', 'india', 'china', '123']

country.shift();
console.log(country); //['india', 'china', '123']

let b = country.shift();//['china', '123']
console.log(b); //india returned value
