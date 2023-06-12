// Deeply understand dom tree, root node , element nodes, text nodes

const rootNode = document.getRootNode();
console.log(rootNode); // #document  --rootNode

console.log(rootNode.childNodes); //NodeList [html]  --here HTML is child of rootnode(document)

const htmlElementNode = rootNode.childNodes[0];

console.log(htmlElementNode); // <html>....................</html>

console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]   ---here HTML is main which has child like HEAD,TEXT,BODY

const headElementNode = htmlElementNode.childNodes[0]; //head
const textNode1 = htmlElementNode.childNodes[1];  //text
const bodyElementNode = htmlElementNode.childNodes[2];  //body

console.log(headElementNode.childNodes); //NodeList(5) [text, title, text, script, text] ---here text=\n newLine

console.log(headElementNode.nextSibling); //#text ---headelement HEAD ka sibling #text matlab = \n newLine

// sibling relation 

console.log(headElementNode.nextElementSibling);// body   ---ye faltu k text=\n ko ignore marta hai

//=====================================================

const a = document.querySelector("h1");
console.log(a); // <h1>My heading</h1>

const b = a.parentNode;  //----->H1 ka parent div hai
console.log(b); //<div class="container">.......</div>

b.style.backgroundColor = "green";
b.style.color = "red";

let c = b.parentNode ; //-------> DIV ka parent BODY hai
console.log(c); //<body>.....</body>








