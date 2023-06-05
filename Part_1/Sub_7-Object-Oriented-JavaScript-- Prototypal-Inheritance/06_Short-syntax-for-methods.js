//Short syntax for methods


const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

//short method
const user2 = {
    firstName : "harshit",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }   
}


//both are same

user1.about(); //harshit 8
user2.about(); //harshit 8