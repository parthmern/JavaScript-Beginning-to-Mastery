//How JavaScript Works and Global Execution context


// PHASE=1) compilation/compile 
// steps- 1-tokenizing/lexing(whole code to small tokens) 
// 2-Parsing(using tokens make AST-abstarct syntext tree) 
// 3-code generation(using AST generation of code)
// why compilation - 1-early error checking 2-determine appropriate scope for variables
//------------------------------------------------------------
// PHASE=2) code execution
// GEC- Global execution content == creation phase(globl scope) and code execution phase
//

// How javascript code executes 

//------------------------------------------------------------
// JS - Synchronous programming language (when one line executed then another line executed - execution ONE-BY-ONE line)
// Single threaded programming language (ek line executed nhi hogi tab tak dusri line par nhi jayaga)


// what is global exection context ? 
// what is local execution context ? 
// closures


console.log(this); //window object

console.log(window); //window object

console.log(firstName); //undefined bcz jab compile k time k baad jab code execution me creation-phase(global scope) k time already firstName : undefined ho gya hoga

var firstName = "Harshit";
console.log(firstName);