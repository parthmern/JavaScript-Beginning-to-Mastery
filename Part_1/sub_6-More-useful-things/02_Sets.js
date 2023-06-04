// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access (index aisa kuch nhi hota isme)
// Order is not guaranteed
// unique items only (no duplicates allowed) - ek element ek he baar ayega
// ex. 3,1,2,3,2 -- this is wrong bcz 3 double baar repeate ho rha hai
//-------------------------------------------------


const array = [1,2,3];

//how to make sets
//new Set(array / string = iterables)

const numbers = new Set([1,2,3]);
console.log(numbers); //Set(3) {1, 2, 3}

//no duplicates allowed -- if there is , then ignore it by set
const numbers1 = new Set([1,2,3,3]);
console.log(numbers1); //Set(3) {1, 2, 3}

//-- No index-based access
console.log(numbers1[2]); // undefined -- No index-based access

//-how to add
const empty = new Set ();

empty.add(1);
empty.add(2);
empty.add(2); // ignore it beacuse it is duplicate

console.log(empty); // {1, 2}

empty.add(["item1","item2"]); // this is array 1
empty.add(["item1","item2"]); // this is array 2 -- both at different location thats why they are not duplicate

console.log(empty); // {1, 2, Array(2), Array(2)}


//add array in Sets
const newArray = ["jam","peep","aksh"];

empty.add(newArray);

console.log(empty); // {1, 2, Array(2), Array(2), Array(3)}

//------------------------
// check there is any elemenet is available in the SET or not

empty.has(2); //--->true or false return

if(empty.has(2)){
    console.log("two is present");
}
else{
    console.log("two isnot present");
}
//OP- two is present

//------------------------
//------------------------
// iterable chechking by FOR-OF loop

for(let x of empty){
    console.log(x);
} 
//OP- 1
//    2
//    ['item1', 'item2']
//    ['item1', 'item2']
//    ['jam', 'peep', 'aksh']

//------------------------
//------------------------

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray); 

console.log(uniqueElements); // {1, 2, 4, 5, 6}

let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length); //5