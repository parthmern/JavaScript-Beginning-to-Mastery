// Select multiple elements and loop through them
//----------------------------------------------------------------
// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll


//--------------------------------------------------------------
let navItems = document.getElementsByClassName("nav-item"); 

console.log(navItems);  // HTMLCollection(3) [li.nav-item, li.nav-item, li.nav-item] ---all elements which has class name"nav-item"


console.log(typeof navItems) //object --array like but not the array
console.log(Array.isArray(navItems)); //false

//-------------------------------------------------
const navItems1 = document.querySelectorAll(".nav-item");

console.log(navItems1); //NodeList(3) [li.nav-item, li.nav-item, li.nav-item]

console.log(navItems[1]); // <li class="nav-item"><a href="">Todo</a></li>


console.log(typeof (navItems1));  //object --array like but not the array
console.log(Array.isArray(navItems1));   //false


//========================================================================
//========================================================================
// array like object ---> we can use indexing, it has length property 

// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for-of loop 
// forEach 

//----------------------------------------------------------
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

//idhar color green nahi ho rha hai because <a> k andar TEXT hai
//-------------------------------------------------
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
//----------------------------------------------

navItems = Array.from(navItems); //conveting to array to use the for-each loop
console.log(Array.isArray(navItems)); //True

navItems.foreach ((navItems)=> {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})

//========================================================================
// we can same use for  .querySelectorAll
