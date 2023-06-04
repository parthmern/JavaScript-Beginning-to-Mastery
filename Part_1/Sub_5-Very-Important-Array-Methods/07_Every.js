// every method -- true / false ans


const numbers = [2,4,6,9,10];

const ans = numbers.every((n)=> n % 2 === 0 );

//callback function --> true/false -- boolean fun
//every function --> true/false -- boolean fun

console.log(ans); // false 

//if every character is EVEN means every ans is TRUE then the output is TRUE
//here 9 is odd so ans is False for this then output is FALSE

//-------------------------------------
//example

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

function lessthan30k(n){
    return n.price < 30000 ; 
}

const OP  =  userCart.every(lessthan30k);

//same as arrwo function 
const OParrow  =  userCart.every((n) => n.price < 30000 );

console.log(OP); //TRUE bcz all price is less than 30K


console.log(OParrow );//true
