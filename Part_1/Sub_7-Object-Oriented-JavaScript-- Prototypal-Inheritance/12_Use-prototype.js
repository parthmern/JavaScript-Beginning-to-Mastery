//Use prototype
//-------------------------------------------

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);// {} + carry value of Prototype
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

console.log(user1); //createUser {firstName: 'harshit', lastName: 'vashsith', email: 'harshit@gmail.com', age: 18, address: 'my address'} 
                    //  +  [[Prototype]] Object where -about : ƒ () , is18 : f() , sing : f() existed



console.log(user1.is18());  //true