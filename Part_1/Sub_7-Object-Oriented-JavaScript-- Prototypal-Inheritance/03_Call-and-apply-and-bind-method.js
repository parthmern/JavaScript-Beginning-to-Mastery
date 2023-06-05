// Call , apply and bind method


const user1 = {
    firstName : "harshit",
    age: 8,   
    about : function(){
        console.log(this.firstName, this.age);
    }
}

const user2 = {
    firstName : "mohit",
    age: 9,
    
}

user1.about(); // harshit 8

// now if we want to use the fucntion in about of USER1 then we have to borrow it
//and this borrowing process know as the CALL

user1.about.call(user2); //mohit 9 

//------------------------------------------

const user3 = {
    firstName : "harshit",
    age: 8,   
    about : function(hobby,music){
        console.log(this.firstName, this.age,hobby,music);
    }
}

const user4 = {
    firstName : "mohit",
    age: 9,
    
}

user3.about.call(user4,"hacking","until i found you"); //mohit 9 hacking until i found you

//------------------------------------------------------------------

function info(hobby,music){
    console.log(this.firstName, this.age,hobby,music);
}

const user5 = {
    firstName : "harshit",
    age: 8,   
}
const user6 = {
    firstName : "mohit",
    age: 9,
    
}

info.call(user5,"car","befier"); //harshit 8 car befier

//-------------------------------------------------------------
//APPLY
//same as CALL but pass arguments in array

info.apply(user5,["drone","hubzhggh"]); // harshit 8 drone hubzhggh

//---------------------------------------------------------
// BIND
// it returns the FUNCTION

const func = info.bind(user6,"guitar","batch");

func(); // mohit 9 guitar batch