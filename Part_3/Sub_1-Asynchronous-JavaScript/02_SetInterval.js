// setInterval(function,time)

console.log("script start");

setInterval(() => {
  console.log("work");
}, 500);

console.log("script end");

// this will RUN unlimited time

// OUTPUT =
// script start
// script end
// work

//====================================================================
// to stop this SETINTERVAL 

console.log("script start");

const intervalID = setInterval(() => {
    console.log("work");
  }, 500);     // it also return the ID and as purpose of stop/clear we use to generate ID

console.log("script end");

clearInterval(intervalID); //to stop this



