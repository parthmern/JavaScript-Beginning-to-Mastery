// Closure Example 2
 
function myFunction(power){

    return function innerFunc(number){

        return power * number ;
    }
}


let ans  = myFunction(3);

let output = ans(2);

console.log(output); //6