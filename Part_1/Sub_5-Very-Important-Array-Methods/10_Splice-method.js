// splice method 
// change original array
// start , delete , insert 

//---------------------------------------------
//delete
//startindex , deleteItemsNumber or deleteIndex
const myArray = ['item1', 'item2', 'item3'];

// myArray.splice(1,1);

const delItem =  myArray.splice(1,1); //['item1', 'item3']
console.log(myArray);

//delete also returns the deleted item

console.log(delItem); // ['item2']

//----------------------------------------------
//insert
//startindex, deleteIndex , insertItem

// if you do not want to delete the item then put DELETE INDEX as = 0

const myArray1 = ['item1', 'item2', 'item3'];
myArray1.splice(1,0,"inserted item");
console.log(myArray1); // ['item1', 'inserted item', 'item2', 'item3']

//----------------------------------------------------
// insert and delete together

const myArray2 = ['item1', 'item2', 'item3','item4'];
myArray2.splice(1,2,"inserted item no1","inserted item no2");
console.log(myArray2); //['item1', 'inserted item no1', 'inserted item no2', 'item4']






