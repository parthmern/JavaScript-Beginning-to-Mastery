// Why that solution isn’t that great
//--------------------------------------------------------

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {} + carry the property of userMethods  __proto__
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

console.log(user1); // {firstName: 'harshit', lastName: 'vashsith', email: 'harshit@gmail.com', age: 9, address: 'my address'} with  __proto__ or [[prototype]]

console.log(user1.about()); //harshit is 9 years old.

console.log(user3.sing()); // toon na na na la la 


//==========================================================================
//==========================================================================
// Object.create()

// Create a person object that will serve as the prototype
const person = {
  firstName: "John",
  lastName: "Doe",
  greet: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
};

// Create a new object person1 that inherits from the person object
const person1 = Object.create(person);

console.log(person1.firstName); // "John" (inherited from the prototype)
console.log(person1.greet()); // "Hello, my name is John Doe" (inherited method)

// Create another person object that inherits from person
const person2 = Object.create(person);

person2.firstName = "Alice"; // Override the firstName property
console.log(person2.firstName); // "Alice" (overrides the inherited property)
console.log(person2.greet()); // "Hello, my name is Alice Doe" (inherited method)
