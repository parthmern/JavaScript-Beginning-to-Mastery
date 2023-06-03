// difference between dot and bracket notaion

const person = {name:"parth",age:22,"person hobbies":["driving","playing","sing"]};

// console.log(person.person hobbies); -->we cannot write like this bcz it is ERROR

//so use BRACKET NOTATION
console.log(person["person hobbies"]); // ['driving', 'playing', 'sing']

const key = "cyber";


person[key] = "carracingsschool";  //  {cyber: 'carracingsschool'}


console.log(person);