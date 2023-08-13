// synchronous programming vs asynchronous programming
//------------------------------------------------------------
//------------------------------------------------------------

// JAVASCRPIT is synchronous programming single threaded

// synchronous programming ??
// one work then other work 
// ex - first done the whole task-1 means the whole iteration till the 10000 and then it do task-2 means print


// task-1(loop)
for (let i = 1; i < 10000; i++) {
  console.log("inside for loop");
}

// task-2(printf)
console.log("scrpipt ended");

// here the loop takes almost 20sec to run then the task-2 will be done after 20sec 
// so the loop BLOCKED the code of task-2 = BLOCKING EVENT

//------------------------------------------------------------
//------------------------------------------------------------

// SetTimeout(funtion,time-minimum)

console.log("script start"); // task1

setTimeout(()=>{console.log("inside setTimeout");},2000); //task2

console.log("script end"); // task3

// OUTPUT=
// script start
// script end
// inside setTimeout

// here the TASK1 done then 
// TASK2 is WEB APIS PROVIDED BY BROWSER(ex- fetch,setTimeout) so give to WEB APIS PROVIDED BY BROWSER
// then after 2000mili second(2 sec) which is minium time this BROWSER WEB APIS give that TASK2 to the QUEUE
// and then queue send it through EVENT LOOP to the stack but here one condition is that STACK MUST BE EMPTY
// so stack is not empty till TASK3 will be done
// after TASK3 the TASK2 will go to the stack and it will run

// here 2Sec is minimum time that user give but max.time is not defined because after the whole file will excecute
// the BROWSER WEBAPIS provided TASKS will be run

//------------------------------------------------------------
//SetTimeout() with 0 millisecond


console.log("script start"); //TASK1

setTimeout(() => {
  console.log("inside setTimeout");
}, 0);                                       //TASK2

for (let i = 1; i < 100; i++) {
  console.log("...."); 
}                                              //TASK3
 
console.log("script end"); //TASK4

// OUTPUT
// script start
// script end
// .... (100times)
// inside setTimeout

// here time is 0 mili second so after going to the BROWSER WEBAPIS then excect 0ms later it will go to the QUEUE
// but at that time TASK 3 is available and running in stack 
// so EVENT LOOP does not give permisiion to the QUEUE's TASK2 to go to the stack
// then TASK4 will be done 
// IN THE LAST, after completion of whole files in the document stack will be empty 
// TASK2 will be done in last 


//------------------------------------------------------------

console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("settimeout id is ", id); // SETTIMEOUT also return the value
console.log("clearing time out");
clearTimeout(id); // clearing the SETTIMEOUT so it will not gone excecute in the last
console.log("Script end");



