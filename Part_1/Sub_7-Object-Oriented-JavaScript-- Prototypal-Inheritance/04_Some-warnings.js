const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 
console.log(user1.about); // (){
//                                console.log(this.firstName, this.age);
//                                }

user1.about();

const myFunc = user1.about.bind(user1);
myFunc();