//Example using class keyword

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const Animal1 = new Animal("tom",2);

console.log(Animal1); //{name: 'tom', age: 2} + prototype

console.log(Animal1.eat()); //tom is eating

//--------------------------

class DOG extends Animal{

}

//dog class extends the Animal class constructor

const tommy = new DOG("tommy", 3); //goes to ANIMAL CLASS constructor

console.log(tommy); //{name: 'tommy', age: 3}

console.log(tommy.isCute()); //true