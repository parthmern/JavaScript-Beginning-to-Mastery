let mouseXStartpoint = 300;
let mouseXEndpoint = window.innerWidth;
let currentXposition = 0;
let fracXvalue = 0;

mouseXRange = mouseXEndpoint - mouseXStartpoint ;

const mouseMoveFunc = (event) =>{
    // console.log(event);

    // console.log(` x value = ${event.clientX}`);
    // console.log(` y value = ${event.clientY}`);

    currentXposition = event.clientX - 300 ;
    fracXvalue = currentXposition / mouseXRange ;

    console.log(fracXvalue);
}


window.addEventListener('mousemove',mouseMoveFunc);


