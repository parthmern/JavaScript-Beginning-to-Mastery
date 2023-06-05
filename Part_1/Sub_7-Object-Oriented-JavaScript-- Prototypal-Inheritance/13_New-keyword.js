//New keyword
//-----------
// 3 works done by New key word
// 1)) create empty object  --- this = {}
// 2)) return this means emptyobject{}
// 3)) automatic joints reference of prototype ---- no to type const user = Object.create(createUser.prototype);
 
// constructor function 
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

console.log(user1); // {firstName: 'harshit', lastName: 'vashsith', email: 'harshit@gmail.com', age: 18, address: 'my address'} 
                    // + [[prototype]]

console.log(user1.is18()); //true





