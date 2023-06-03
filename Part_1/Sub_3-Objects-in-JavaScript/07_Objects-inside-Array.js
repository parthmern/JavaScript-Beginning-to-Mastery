// objects inside array 
// very useful in real world applications

const users = [
    {user_id : 1 ,firstName : "parth",gender:"male"},
    {user_id : 2 ,firstName : "harshit",gender:"malesig"},
    {user_id : 3 ,firstName : "rakes",gender:"malemig"}
];

for(let value of users){
    console.log(value); // {user_id: 1, firstName: 'parth', gender: 'male'}
                        //{user_id: 2, firstName: 'harshit', gender: 'malesig'}
                        //{user_id: 3, firstName: 'rakes', gender: 'malemig'}
                        
    console.log(value.user_id); // 1 - 2- 3

    console.log(value.firstName); // parth - harshit -rakes
}                                           