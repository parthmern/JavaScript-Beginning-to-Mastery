// sort
// change ORIGINAL ARRAY

// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected) <ascending order>

const num = [ 1,3,1200 , 400 ,900];
num.sort();
console.log(num); // [1, 1200, 3, 400, 900] (unexpected result)

//unexpected result because JS sort according to the String with their ASCII value

//------------------------------

const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
userNames.sort();
console.log(userNames); // ['ABC', 'Harshit', 'aabc', 'abcd', 'harshit', 'mohit', 'nitish']
//sorted according to the first letter of every string


//---------------------
//HOW TO GET EXPECTED RESULT

const numbers = [5,9,1200, 410, 3000];

numbers.sort((a,b)=>{
    return a-b;
});

// numbers.sort((a,b)=>a-b);

console.log(numbers); //[5, 9, 410, 1200, 3000]

//Explained

// for 1200 and 410
// a - b --> 790
// a-b ---> POSITIVE (greater than 0) ---> b, a
// 410 , 1200 

// for 5 and 9
// a - b = -4
// a-b ---> NEGATIVE (less than 0  ) ----> a,b
// 5,9

//ASCENDING ORDER ( a - b ) likhna hai return mei
//DECENDING ORDER ( b - a ) likhna hai return mei


//==========================================================
//real life ex -- price low to high and high to low

const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price ;
})

console.log(lowToHigh); // object p3, p1 , p5 , p2 ,p4 



//==========================================================
//==========================================================
//==========================================================
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125
