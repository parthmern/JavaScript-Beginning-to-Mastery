// nested destructuring 

const users = [
    {user_id : 1 ,firstName : "parth",gender:"male"},
    {user_id : 2 ,firstName : "harshit",gender:"malesig"},
    {user_id : 3 ,firstName : "rakes",gender:"malemig"}
];

const [{firstName}, , {gender}] = users;

console.log(firstName); //parth
console.log(gender); // malemig

//-----------------------
//chainging varaibles

const [{firstName:var1 , user_id}, , {gender:var2}] = users;

console.log(var1); //parth
console.log(user_id); // 1  
console.log(var2); // malemig