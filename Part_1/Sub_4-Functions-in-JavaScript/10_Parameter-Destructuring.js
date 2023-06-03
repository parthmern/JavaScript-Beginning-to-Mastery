//Parameter Destructuring

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
}

printDetails(person); // harshit - name

//---------------------

function printDetails1({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails1(person); // harshit - male -500
