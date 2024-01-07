// objects -- reference type  
// arrays are good but not sufficient for real world data 
// objects store key value pairs 
// objects don't have index

//object = { key : value }

let person = {name:"parth",age:22};
console.log(person); // name:"parth",age:22 --- this is keyValue pair

//1)) DOT notation
console.log(person.name); //parth
console.log(person.age); //22

//2)) BRACKATE notation
console.log(person["name"]); //parth
console.log(person["age"]); //22

//array in the object

let boy = { naam:"pathuuu", saal:18 , hobbies:["cricket","tennis","balling"]};

console.log(boy.hobbies); //['cricket', 'tennis', 'balling']

//adding key value pair

boy.relation = "single";

console.log(boy); // {naam: 'pathuuu', saal: 18, hobbies: Array(3), relation: 'single'}

// ===================================================================================
// ========================================================================
// ================================================================

// METHODS to create object
// -------------------
// 1) object literal

// Using object literal syntax
let person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello!');
  }
};

// Accessing properties/methods
console.log(person.name); // Output: John
person.greet(); // Output: Hello!

// -----------------------
// 2) consructor function

// Using constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log('Hello!');
  };
}

let person1 = new Person('John', 30);
console.log(person1.name); // Output: John
person1.greet(); // Output: Hello!


// ----------------------
// 3) ES6 Classes

// Using ES6 class syntax
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log('Some sound');
  }
}

let dog = new Animal('Buddy', 'Dog');
console.log(dog.name); // Output: Buddy
dog.makeSound(); // Output: Some sound

// ---------------------
// 4) Object.create method

// Using Object.create method
let car = {
  type: 'SUV',
  displayType: function() {
    console.log('Type: ' + this.type);
  }
};

let myCar = Object.create(car);
myCar.displayType(); // Output: Type: SUV

