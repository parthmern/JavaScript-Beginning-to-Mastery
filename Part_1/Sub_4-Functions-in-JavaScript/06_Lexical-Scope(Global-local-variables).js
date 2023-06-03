//Lexical Scope
// like LOCAL VARIABLE and GLOBAL VARIABLE

function myApp(){  //main function

    const myVar = "value1";  //--global variable

    function myFunc1(){                                    // sub function 1
        const myVar = "value59func1";
        console.log("inside myFunc1",myVar);
    }  

    const myFunc2 = function(){                            //sub function 2
        // const myVar = "value60func2";
        console.log("inside myFunc2",myVar);
    }
    const myFunc3 = () => {} //sub function 3

    console.log(myVar);

    myFunc1(); // myVar = value59func1 -- local variable

    myFunc2(); // myVar =  value1  -- global variable

}

myApp(); 

//OUTPUT -
//           value1
//           inside myFunc1 value59func1
//           inside myFunc2 value1