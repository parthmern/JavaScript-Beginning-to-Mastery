console.log("hello world");

//=============================================================
//======================================================

// BUBBLING PHASE 


const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click",()=>console.log("you clicked on child"));
parent.addEventListener("click",()=>console.log("you clicked on parent"));
//jab child par click kar rha toh parent par bhi click automatically ho rha hai

grandparent.addEventListener("click",()=>console.log("you clicked on grandparent"));

document.body.addEventListener("click",()=>console.log("you clicked on body"));
//jab child par click kar rha toh parent par bhi and grantparent par bhi and body par bhi click automatically ho rha hai


//OUTPUT when CLICKD ON CHILD
// you clicked on child
// you clicked on parent
// you clicked on grandparent
// you clicked on body



//===========================================================
//=======================================================

// capturing events ---
// element.addEventListner("click",callbackFunction,true);


child.addEventListener(
  "click",
  () => {
    console.log("capture !!!! child");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! parent");
  },
  true
);

grandparent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! grandparent");
  },
  true
);

document.body.addEventListener(
  "click",
  () => {
    console.log("capture !!!! document.body");
  },
  true
);



//OUTPUT when CLICKD ON CHILD
//capture !!!! document.body
//capture !!!! grandparent
//capture !!!! parent
//capture !!!! child

//NOTE- aagar eventlistner add kiya hai perticular element par toh hee work hoga

//===========================================================
//=======================================================

// event delegation

grandparent.addEventListener("click",()=>console.log("you clicked on something(gp,p,c)"));

//event listner sirf or sirf grandparent par add hua hai tab bhi hum child-parent par clcik karenge toh b excecution run hoga

grandparent.addEventListener("click", (e) => {
  console.log(e.target); // target set kar hum jan sakte hai kis par click kiya hai -child-parent-grandparent kis par
});



