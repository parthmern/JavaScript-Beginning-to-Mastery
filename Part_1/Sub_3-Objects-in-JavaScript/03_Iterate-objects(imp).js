//Iterate objects

const person =  {

    name:"parth",
    age:"23",
    hobby : ["droneracing","taxy","pcd"]
};

//for-in loop
//we cannot use DOT-notation in object while in for-in loop
//so use BRACKET-notation without "" ex. object[key]
for(let key in person){

    console.log(key); // name - age - hooby

    console.log(person[key]); // parth - 23 - ['droneracing', 'taxy', 'pcd']
    
    //key value pair
    console.log(`${key} : ${person[key]}`); // name : parth - age : 23 - hobby : droneracing,taxy,pcd

    console.log(key," : " , person[key]); // name : parth - age : 23 - hobby : droneracing,taxy,pcd

}


//Object.keys(nameOfObject)  method to make ARRAY

console.log((Object.keys(person))); //['name', 'age', 'hobby']  <-- array

//FOR-OF-loop
//FOR-OF loop cannot work on object so convert object to ARRAY
// Object.keys(array) 
// Object.values(array)

for(let key of Object.keys(person)){
    console.log(key); // name - age - hobby

    console.log(person[key]); // parth - 23 - ['droneracing', 'taxy', 'pcd']
}

