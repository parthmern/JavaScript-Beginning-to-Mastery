// change text
// textContent & innerText

const mainHeading = document.getElementById("main-heading");

console.log(mainHeading);  // <h2 id="main-heading">Manage your tasks  <span style="display: none">Hello</span>  </h2>

console.log(mainHeading.textContent); // Manage your tasks Hello

// mainHeading.textContent = "newed changed this is ";

// console.log(mainHeading); // <h2 id="main-heading"> newed changed this is </h2>

// console.log(mainHeading.textContent); // newed changed this is 

//-------------------------------------
// textContent innerText

console.log(mainHeading.innerText) ; //Manage your tasks 

//(iddhar Hello nhi milega bcz innertext browser me jo dikhta hai wo he dega
// idhar browser me HELLO{display:hidden} hai isliye nhi dikha rha browser me bhi toh innerText bhi nhi batayega
// aaagar display:block hoti and browser me dikh rha hota toh ye innerText bhi dikhati


