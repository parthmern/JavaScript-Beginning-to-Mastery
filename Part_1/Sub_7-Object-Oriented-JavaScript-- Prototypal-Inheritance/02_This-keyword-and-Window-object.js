//This keyword, Window object

console.log(this); // {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(window); // {window: Window, self: Window, document: document, name: '', location: Location, …}


function myFunc(){
    
    console.log(this);
}

myFunc(); //{window: Window, self: Window, document: document, name: '', location: Location, …}


// If weare using
strict;


myFunc(); // then ERROR



// ===============================================================================
// ===============================================================================

// "this" KEYWORD

// ---------------------------------
// Global context
console.log(this); // Refers to the global object (e.g., window in a browser)

// ---------------------------------
// Regular function
function regularFunction() {
  console.log(this);
}
regularFunction(); // Refers to the global object

// ----------------------------------
const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
  sayHelloArrow: () => {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.sayHello(); // Output: Hello, my name is John.
person.sayHelloArrow(); // Output: Hello, my name is undefined.


// ----------------------------------
// Object method
const obj = {
  name: 'Example',
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};
obj.greet(); // Refers to the obj and prints "Hello, Example!"

// ----------------------------------
// Constructor function
function Person(name) {
  this.name = name;
  this.sayName = function() {
    console.log(`My name is ${this.name}.`);
  };
}
const person1 = new Person('Alice');
person1.sayName(); // Refers to person1 and prints "My name is Alice!"

// -----------------------------------
// Event handler
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log(this); // Refers to the DOM element 'myButton'
});



