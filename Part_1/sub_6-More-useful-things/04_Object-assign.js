// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}

let obj2 = obj ;

console.log(obj); //{key1: 'value1', key2: 'value2'}
console.log(obj2); //{key1: 'value1', key2: 'value2'}

obj.key3 = "value3";

console.log(obj); // {key1: 'value1', key2: 'value2', key3: 'value3'}
console.log(obj2); // {key1: 'value1', key2: 'value2', key3: 'value3'}

//after cloning
obj2 = {...obj};

obj.key4 = "value4";

console.log(obj); //{key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}
console.log(obj2); // {key1: 'value1', key2: 'value2', key3: 'value3'}

//--------------------
// cloning using object.assign

const obj3 = Object.assign({}, obj); // cloning

console.log(obj3); //{key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}











