// Closure Example 3


function func(){
    
    let counter = 0 ;

    return function () {

        if(counter < 1){
            console.log("you can call me");

            counter++;
        }

        else{
            console.log("you have already called me one time try after some hours");
        }
    }
}

let x = func(); // whole anonymous func

x(); // you can call me
x(); // you have already called me one time try after some hours
x(); // you have already called me one time try after some hours
