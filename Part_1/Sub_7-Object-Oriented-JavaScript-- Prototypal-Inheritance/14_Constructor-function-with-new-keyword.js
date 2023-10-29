//Constructor function with new keyword


function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

for(let key in user1){
    console.log(key);
} // firstName -lastName-email-age-address- about - is18 - sing

for(let key in user1){
    
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }

} // firstName -lastName-email-age-address-


//===========================================================
//===========================================================
// new XXXXXX

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);

// When you use new, a new object is created, and this inside the constructor function refers to the new object.
