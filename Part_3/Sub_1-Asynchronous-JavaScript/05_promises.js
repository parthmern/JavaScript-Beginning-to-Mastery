// promises ( "Futures" )

// promise status   |   promise result
//----------------------------------------
// "pending"        |   undefined
// "fulfilled"      |   a result value
// "rejected"       |   an error object

// promise-consume is the feature of BROWSER not the JS
// and then promise add in MICROTASK-QUEUE
// and then the whole file(GEC-global excecution contex) is excecuted and completed and the stack is empty 
// thus the promise will send to stack and excecutes

//-------------------------------------------------------------------------
// MICROTASK-QUEUE PRIORITY >> CALLBACK-QUEUE

// microtask queue - promise-consume(.then,.catch)
// callback task - setInterval, setTimeout

// aagar 2 tasks hai ek microtask queue me hai and dusra callback queue me hai toh sabse pehle microtask queue wala chalega and then callback queue wala chalega

//===========================================================================================
//===========================================================================================
//===========================================================================================

console.log("start scrpit GEC");

let x = 3 ;

// step1 = produce the promise 
const ans = new Promise( function result(resolve,reject)
{
    if(x>5)
    {
        resolve("bada");
    }
    else
    {
        reject("chota");
    }
    
} );

// step2 = consume the promise
ans
.then(function promiseResolved(resolve){
    console.log("resolvedddd",resolve);
})
.catch(function promiseRejected(reject){
    console.log("rejectedddd",reject);
})

console.log("end scrpit GEC");

// output--
// start scrpit GEC
// end scrpit GEC
// rejectedddd chota

//===========================================================================================
//===========================================================================================
//--------------------------------------------------------------------------
// que- i want to make fried rice

const bucket = ['coffee', 'chips','vegetables','salt','rice'];

// new Promise( function(resolve,reject){} )
// step1 = produce the promise 
const friedRicePromise = new Promise( (resolve,reject)=>

{

    if( bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice") )
    {
        resolve("able to make friedRice");
    }
    
    else{
        reject("could not do it");
    }

}
)

// step2 = consume the promise
// how to consume 

friedRicePromise
.then(
// jab promise resolve hoga 
(myfriedRice)=>{ console.log("lets eat ", myfriedRice); } )

.catch( (error)=>{ console.log(error) } )


//===========================================================================================
//===========================================================================================
//-------------------------------------------------------------------------
// MICROTASK-QUEUE PRIORITY >> CALLBACK-QUEUE

// microtask queue - promise-consume(.then,.catch)
// callback task - setInterval, setTimeout

// aagar 2 tasks hai ek microtask queue me hai and dusra callback queue me hai toh sabse pehle microtask queue wala chalega and then callback queue wala chalega

// Promise
console.log("script start");
const buckets = ['coffee', 'chips','vegetables','salt','rice'];


//1) produce 
const friedRicePromises = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})


//2) consume 
// how to consume 

friedRicePromises.then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")

//output
//script start
//100random num loop
//script end
//promise (bcz promise go in microtask queue and the microtask priority >> callback queue )
//hello from settimeout (setTimeout -- bcz it goes in  callback queue  )