// This inside arrow functions

// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(); //undefined undefined

//arrow fucntion do not have Own this.x
//matlab arrow function ka this uske surrounding ka ek level upper hoga matlab abhi WINDOW object hoga 
//levels like USER1 se ek lvl upper mean WINDOW object

user1.about(user1);  //undefined undefined

user1.about.call(user1);    //undefined undefined