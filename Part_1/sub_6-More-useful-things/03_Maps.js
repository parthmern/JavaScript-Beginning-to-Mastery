// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

////////////////////////
// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

//---------------------
// object literal 
// key -> string 
// key -> symbol

const person = {
    name : "parth",
    age : 22,
    1:"one",
};

for(let key in person){
    console.log(typeof key);
} 
// 3 string
// here 1 is string

//-------------------------------
//---------------------------------------------

const person1 = new Map();
//add key value pair 
person1.set('firstName','harshit');
person1.set("age","22");
person1.set(1,"one");
console.log(person1); // Map(2) {'firstName' => 'harshit', 'age' => '22' , 1 => 'one'}

//how to access

console.log(person1.get("firstName")); // harshit

console.log(person1.get(1)); //one

console.log(person1.keys()); // {'firstName', 'age', 1}

for(let y of person1){
    console.log(y);
}
//OP - ['firstName', 'harshit']
//     ['age', '22']
//     [1, 'one']

//----------------------------------------------------
// in maps you can use anything as key
// like array, number, string 

person1.set([1,2,3],"matrix");

console.log(person1); //{'firstName' => 'harshit', 'age' => '22', 1 => 'one', Array(3) => 'matrix'}

for(let [key, value] of person1){
    // console.log(Array.isArray(key));
    console.log(key, value)
}
//OP- firstName harshit
//    age 22
//    1 'one'
//    [1, 2, 3] 'matrix'

//-----------------------------------------------------------

const person10 = {
    id: 1,
    firstName: "harshit"
}
const person20 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(person10, {age: 8, gender: "male"});
extraInfo.set(person20, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person10.id); 
console.log(extraInfo.get(person10).gender);
console.log(extraInfo.get(person20).gender);