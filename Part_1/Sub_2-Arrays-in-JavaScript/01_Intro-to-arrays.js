// intro to ARRAYS -- multiple variable creation
//---- ordered collection of items
// reference type (OBJECT)


let fruit=["apple","mango","345"];

console.log(fruit[0]); // apple
console.log(fruit[1]); // mango
console.log(fruit[2]); //345

console.log(fruit);

// re-assign value of array

fruit[1] = "japan";
console.log(fruit[1]); // japan

console.log(typeof(fruit)); //OBJECT

// how to know anything is array or not

console.log(Array.isArray(fruit));
