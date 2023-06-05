// __proto__
// one type of reference

// offical ecmascript documentation --  [[prototype]]

// __proto__ , [[prototype]]   <-- this both are same

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key3 : "value3"
}

console.log(obj1); // {key1: 'value1', key2: 'value2'}
console.log(obj2); // {key3: 'value3'

//when we try to acces the value of key2 from obj2 then KEY2 is undefined bcz there is not any key2 in obj2

console.log(obj2.key2); // undefined

//-------------------------------------------------------------------------
// *********OOPS******** - now if we have to give the commad to the obj2 that if there is not any key2 in obj2 then go to the obj1 
//and put the key2 of obj1

// for doing this OBJ2 have to carry the property of OBJ1
// using  __proto__ , [[prototype]]


const obj3 = Object.create(obj1); // {} + carry the property of userMethods  __proto__
// there is one more way to create empty object

obj3.key3 = "value3";  // {key3: 'value3'}

console.log(obj3); // {key3: 'value3'}

console.log(obj3.__proto__); //{key1: 'value1', key2: 'value2'} this property of Obj1 is carried by obj3