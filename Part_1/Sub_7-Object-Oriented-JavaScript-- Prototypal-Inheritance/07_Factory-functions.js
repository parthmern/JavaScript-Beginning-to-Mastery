// Factory functions & discuss some memory related problems
//------------------------------------------------

// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

function createUser(firstName,lastName,email,age,address){
    
    const user = {};

    user.firstName = firstName ;
    user.lastName = lastName ;
    user.email = email ;
    user.age = age ;
    user.address = address ;

    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };

    user.is18 =  function(){
        return this.age >= 18;
    }

    return user;

}

const user1 = createUser('parht', 'patel', 'pptl@gmail.com', 49, "my home address");
console.log(user1); // {firstName: 'parht', lastName: 'patel', email: 'pptl@gmail.com', age: 49, address: 'my home address', …}

const is18 = user1.is18();
console.log(is18); //True

const about = user1.about();
console.log(about);//parht is 49 years old.



//PROBLEM
//every time methods create ho rhi hai user1 , user2 , user3 mei