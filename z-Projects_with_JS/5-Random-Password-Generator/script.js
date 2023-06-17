// DATASETS
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const lowerSet = "abcdefghijklmnopqrstuvwxyz" ;
const numberSet = "1234567890" ;
const symbolSet = "~!@#$%^&*()_+/" ;

// Function that give random value
function getRandomData (dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

console.log(getRandomData(upperSet)); 
console.log(getRandomData(lowerSet));
console.log(getRandomData(numberSet));
console.log(getRandomData(symbolSet));

//SELECTORS
const passBox = document.getElementById("pass-box");
console.log(passBox);

const totalChar = document.getElementById("total-char");
console.log(totalChar);

const upperInput = document.getElementById("upper-case");
console.log(upperInput); //checkbox of uppercase letter

const lowerInput = document.getElementById("lower-case");
console.log(lowerInput); //checkbox of lowercase letter

const numberInput = document.getElementById("numbers");
console.log(numberInput); //checkbox of number

const symbolInput = document.getElementById("symbols");
console.log(symbolInput); //checkbox of symbols


// BY default password is empty



function generatePassword(password = ""){

    console.log("password= ", password);

    if (upperInput.checked) {
        password += getRandomData(upperSet);
    }

    if (lowerInput.checked) {
        password += getRandomData(lowerSet);
    }

    if (numberInput.checked) {
        password += getRandomData(numberSet);
    }

    if (symbolInput.checked) {
        password += getRandomData(symbolSet);
    }

    console.log("firsttimepass=",password);


    //idhar bas 4 character he mil rahe hai --- 4 se jyada character chiye toh fir se recursive function call krna padega

    if ( password.length < totalChar.value ) {

        console.log("repeate the password generate process");

        return generatePassword(password);
    }

    //recursive funciton ka bhi ek problem hai ki ye 4+4+4+4 ki pair me password dega
    //aagar user ko 10 value ka chiye fir bhi 12 value ka dega
    //using trim to avoid this

    if(password.length > totalChar.value){

        console.log("trim maro");
    
        password = password.slice(0,totalChar.value);
    
        console.log("after triming pas=" , password);
    
        console.log("return pass value trim wala=",password);

    }

    console.log("ans=",password);

    passBox.innerText = password ;
    
}

document.getElementById("btn").addEventListener( "click", function() { generatePassword() });


























