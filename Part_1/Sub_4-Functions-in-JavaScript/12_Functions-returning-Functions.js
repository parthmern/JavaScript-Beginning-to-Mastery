// Functions returning Functions 

function myFunc(){

    function hello(){
        return "hello world"
    }
    
    return hello; // returing hello() function
}

const ans = myFunc();
console.log(ans());  //hello world
