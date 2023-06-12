//Get and set attributes(matlab ek element k andar jo bhi hai wo sab-attributes)

//----------------------------------------------------------
// .getAttribute("nameOFattribute")

const link = document.querySelector("a");  // <a href="#home">Home</a> //idhar MAIN<a> hai uske adar jo bhi classes,ids,style wo sab attribute hai

console.log(link.getAttribute("href"));  // #home

console.log(link.getAttribute("href").slice(1));  // home


//-----------------------------------------------------------
// .setAttribute("nameOFattribute","changedValue")

link.setAttribute( "href", "changedURL.com" );

console.log(link.getAttribute("href"));   //changedURL.com