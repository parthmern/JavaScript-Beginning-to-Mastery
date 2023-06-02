//Nested if else

let winningNumber = 19 ;
let userGuess = prompt("Guess the number = ");

console.log(userGuess);

if (winningNumber == userGuess){
    console.log("your guess is right lucky number is = "+ userGuess );
    console.log(`ha ha you are right ${userGuess}`);
}
else{
    
    console.log("your guess is wrong");

    if(userGuess>19){
        console.log("you have to guess the lower number");
    }
    else{
        console.log("you have to guess the Higher number");
    }
}