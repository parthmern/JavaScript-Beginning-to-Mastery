// spread operator in array
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
const newArray = [..."123456789"];
console.log(newArray); //['1', '2', '3', '4', '5', '6', '7', '8', '9']

//----------------------------------
// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
};

const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
};

const newObj = {...obj1,...obj2}
console.log(newObj); // {key1: 'valueUnique', key2: 'value2', key3: 'value3', key4: 'value4'}

// kisi ek obj me 1 key 1 baar he rahegi (ex.here key1)

//adding new key
const newObj2 = {...obj1,...obj2,key99:"key999"};
console.log(newObj2); //{key1: 'valueUnique', key2: 'value2', key3: 'value3', key4: 'value4', key99: 'key999'}


//key according to the INDEX
const newObj3 = {..."abc"};
console.log(newObj3);//{0: 'a', 1: 'b', 2: 'c'}


