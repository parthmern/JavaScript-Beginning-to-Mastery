// some method -- same as every but check ONLY ONE

const numbers = [3,5,11,9];

//if any single number is even then ans = TRUE
//need only ONE true then ans = TRUE

const ans = numbers.some((n)=>n%2===0);

console.log(ans); // false

//--------------------------------------
//que- koi bhi ek product hai jiski price 50K se upar hai

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 65000},
    {productId: 3, productName: "macbook", price: 25000},
]

const above30k = userCart.some((n)=>n.price>50000);

console.log(above30k); // TRUE