// Iterables
// jipar hum FOR-OF loop laga sake
// string and arrays are iterables

//string
const firstName = "parth";

for(let n of firstName){
    console.log(n);
}

//OP- p -a -r -t -h
//-------------------------------------

// Array

const array = ["item1", "item2", "item3"];

for(let a of array){
    console.log(a);
}
//OP -item1 -item2 -item3
//-------------------------------------


// array like object 
// jinke pas length property hoti hai 
// aur jiko hum INDEX se access kar sakte hai
// example :- string 

const midName = "dhrub";
console.log(midName.length); //5 -- length property applicabel
console.log(midName[3]); // u  -- accessing with index