// Promise.resolve
// Promise chaining


const myPromise = Promise.resolve(5);

myPromise.then( (value)=>{
  console.log(value);                                   //output-5
})

//---------------------------------------------
//---------------------------------------------
// then()
// then method hamesha promise return karta hai
// return Promise.reject(undefined)
// return Promise.resolve(resolve)


function myPromise()
{

    return new Promise((resolve,reject)=>
    {
        resolve("foo");
    })

}

myPromise()
.then((value)=>{
    console.log(value);                 // foo
    value = value + "bar";
    return value ;                      // aagar hum kuch return nhi karte then UNDEFINED return hoga as like == return Promise.reject(undefined)
//  return Promise.resolve(value)

})

.then((value)=>{
    console.log(value);                 // foobar
    value = value + "baaz";
    return value ;     
})

.then((value)=>{
    console.log(value);                 // foobarbaaz
})




