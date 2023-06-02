//Primitive vs reference data types
//------------------------------------------

//primitve---- saved in stack
//example--number,string,boolean,null,undefined,symbols

let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1); // 6
console.log("value is num2 is", num2); // 6

num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1); // 7
console.log("value is num2 is", num2); // 6

//reference(array is reference type) ------- saved in stack + heap 
//examples -- array,object,function,collection,dates

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1); // ['item1', 'item2']
console.log("array2", array2); // ['item1', 'item2']

array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1); // ['item1', 'item2', 'item3']
console.log("array2", array2); // ['item1', 'item2', 'item3']

