// Closure example 1


function hello(x){
    const a  = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

const ans = hello("arg");
ans(); //varA varB arg

//----------------------------------------------------
// in hello()function there are variables like x=arg , a=varA , b=varB
// hello() returns the anonymus fucntion()
// here this return anonymusfucntion() also stores the values of outer fucntion variables which are =>" x=arg , a=varA , b=varB "according to the lexcal-environment

