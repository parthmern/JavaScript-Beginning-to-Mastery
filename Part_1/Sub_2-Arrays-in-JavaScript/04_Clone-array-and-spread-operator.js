// CLONE array

let array1 = ["item1","item2"];

let array2 = array1.slice(0); // method-1 (SLICE)

let array3 = [].concat(array1); // method-2 (CONCATE)

let array4 = [...array1];// method-3 (SPREAD OPERATOR)

console.log(array1===array2===array3); //false means CLONED (both are different)
console.log(array1);
console.log(array2);
console.log(array3);

//---------------------------

let extraArray = [...array1,...array2]; //['item1', 'item2','item1', 'item2']
let oneArray = array1.slice(0).concat("item3","item4");  //['item1', 'item2','item3', 'item4']


//========================================
//========================================

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const slicedFruits1 = fruits.slice(1, 3); // Extracts elements at index 1 and 2
console.log(slicedFruits1); // ["banana", "cherry"]

const slicedFruits2 = fruits.slice(2); // Extracts elements from index 2 to the end
console.log(slicedFruits2); // ["cherry", "date", "elderberry"]

const shallowCopy = fruits.slice(); // Creates a shallow copy of the entire array
console.log(shallowCopy); // ["apple", "banana", "cherry", "date", "elderberry"]

console.log(fruits); // Original array is not modified
