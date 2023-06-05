// objects -- reference type  
// arrays are good but not sufficient for real world data 
// objects store key value pairs 
// objects don't have index

//object = { key : value }

let person = {name:"parth",age:22};
console.log(person); // name:"parth",age:22 --- this is keyValue pair

//1)) DOT notation
console.log(person.name); //parth
console.log(person.age); //22

//2)) BRACKATE notation
console.log(person["name"]); //parth
console.log(person["age"]); //22

//array in the object

let boy = { naam:"pathuuu", saal:18 , hobbies:["cricket","tennis","balling"]};

console.log(boy.hobbies); //['cricket', 'tennis', 'balling']

//adding key value pair

boy.relation = "single";

console.log(boy); // {naam: 'pathuuu', saal: 18, hobbies: Array(3), relation: 'single'}

