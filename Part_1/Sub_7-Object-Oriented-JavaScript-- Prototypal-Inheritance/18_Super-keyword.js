// Super keyword

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



class DOG extends Animal{
    constructor(name,age,speed){

        super(name,age); //super takes the value of (name,age) from ANIMAL-parent class

        this.speed = speed;

    }

    run(){
            
        return `${this.name} is running at ${this.speed}kmph`
        
    }
    
}

// object / instance 

const tommy = new DOG("tommy", 3,45);

console.log(tommy.run()); //tommy is running at 45kmph

//here we can not do like (DOG.run()) because this is class not the function