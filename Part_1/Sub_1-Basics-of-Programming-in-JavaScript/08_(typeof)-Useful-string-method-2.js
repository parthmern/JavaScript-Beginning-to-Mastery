// typeof operator --give datatype of any variable

let a= 1;
console.log(typeof(a)); // number

let b="parth";
console.log(typeof(b)); //string

//1) convert number to string

a = a + "";
console.log(typeof(a)); // string now ===TYPE 1

a = String(a);
console.log(typeof(a)); // string now === TYPE2

//2) convert string to number

b = +"34" ;
console.log(typeof(b));//Number now ===TYPE 1

b =Number(b);
console.log(typeof(b)); //Number now === TYPE2