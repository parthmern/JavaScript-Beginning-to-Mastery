// Default Parameters

function addTwo(a,b){
    if(typeof b ==="undefined"){
        b = 0;
    }
    return a+b;
}

console.log(addTwo(4)); // a = 4 and b = undefined



function addTwohere(a,b=0){
    return a+b;
}

const ans =  addTwohere(5); // a=5 and b=undefined
console.log(ans); //OP= 5


console.log(addTwohere(5,6)); // OP= 11

