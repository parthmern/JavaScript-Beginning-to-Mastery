//Rest Parameters


function myFunc(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);
}

myFunc(1,2,3); // OP - a is 1 , b is 2 , c is 3

myFunc(1,2,3,4); // OP - a is 1 , b is 2 , c is 3

//--------------

function myFunc1(x,y,...z){
    console.log(`x is ${x}`);
    console.log(`y is ${y}`);
    console.log(`z is`, z);
}

myFunc1(1,2,3); //OP- x is 1, y is 2, z is [3] (z is array)

myFunc1(1,2,3,4); //OP- x is 1, y is 2, z is [3,4] (z is array)

//-----------------
//QUE- sum(x,y,z,i,o,p)
//ANS- x+y+z+i+o+p = total

function sum(...num){

    console.log(num);  // [ 1, 2, 3, 4, 5, 6 ] and typeof(n) = Objcet but(like array like object )

    var total = 0;

    for(let i = 0 ; i<num.length ; i++){

        total = total + i ;
    }

    console.log(total);

    return total ;
}

sum(1,2,3,4,5,6);  // 15

console.log(sum(1,2,3,4,5,6)); // 15



