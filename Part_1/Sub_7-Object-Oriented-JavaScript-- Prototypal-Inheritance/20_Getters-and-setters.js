 // getter and setters 

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //method
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    //method
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("harshit", "sharma", 5);

console.log(person1.fullName); //harshit sharma
console.log(person1.fullName); // we can use it as property -- we dont have to CALL it

console.log(person1.firstName); // harshit
console.log(person1.lastName);  // sharma

//----------------------------------------
//by using SET we can change the 

person1.setName("mohit","desia");

console.log(person1.firstName); // harshit
console.log(person1.lastName);  