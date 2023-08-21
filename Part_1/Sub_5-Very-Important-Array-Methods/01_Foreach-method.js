// important array methods 

//Foreach method
// array.forEach(callbackfunction);


const number = [5,3,4];

function myFunc (num , index){
    console.log("index is", index , "number is",num);
}

// myFunc( number[0], 0);
// myFunc( number[1], 1);

for ( let i =0 ; i<number.length ; i++){
    myFunc(number[i],i);
}

//output - index is 0 number is 5
//         index is 1 number is 3
//         index is 2 number is 4

//-------------------------------------------------------
//-------------------------------------------------------
// array.forEach(callback); 

//IMP=== here callback is outer function that it must be function Declarataion because .forEach is not working with expression/arrow function


number.forEach(myFunc); 

//output - index is 0 number is 5
//         index is 1 number is 3
//         index is 2 number is 4

number.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});

//output - index is 0 number is 5
//         index is 1 number is 3
//         index is 2 number is 4

//-------------------------------------------------------

const user = [
    {name:"parth", age:22},
    {name:"dhruv", age:21},
    {name:"mondil", age:15},
];

user.forEach(function(user){
    console.log(user.name);
});

//output - parth
//         dhruv
//         mondil









