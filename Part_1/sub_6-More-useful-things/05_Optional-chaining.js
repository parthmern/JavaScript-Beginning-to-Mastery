// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}

console.log(user.address); //{houseNumber: '1234'}
// console.log(user.address.houseNumber) // <--- ERROR because address is not availabe now it is commented



//--------------------------------
// agar future me koi object ane wala ho toh hum OPTIONAL CHAINING use karenge

const userPerson  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}

console.log(userPerson?.firstName); //harshit
console.log(userPerson?.address?.houseNumber); //UNDEFIENED  --- not error

