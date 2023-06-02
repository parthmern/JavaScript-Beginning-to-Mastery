//undefined --variable created but value is not assigned
//null
//BigInt
//---------------------------------------------------------
let a ; 
console.log(typeof(a)); //---undefined

//cannot do this with CONST -- there will be ERRRORR

a = 3 ;
console.log(typeof(a)); // ---number

//--------------------------------------------

let b = null ;
console.log(typeof(b)); //ans is NULL but in OP there is (OBJECT)- this is *BUG*

//-----------------------------------------

//BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);