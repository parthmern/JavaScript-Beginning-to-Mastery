//find
//array.find(callbackfunction)

const myArray = ["parth","cat", "dhruv", "nee", "palak"];

function isLength3(string){
    return string.length === 3 ;
}

const ans  = myArray.find(isLength3);

console.log(ans);  //cat

//------------

const ans1  = myArray.find((string)=>string.length ===3);

console.log(ans1); //cat


//---------------------------------------------------------------------

const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>user.userId===3);

console.log(myUser); // {userId : 3, userName: "nitish"}
