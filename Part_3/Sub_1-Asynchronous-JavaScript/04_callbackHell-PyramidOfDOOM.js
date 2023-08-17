// callbacks , callback hell, pyramid of doom

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");

// why callback Hell

setTimeout(()=>{heading1.textContent = "one"; },2000);
setTimeout(()=>{heading2.textContent = "two";},2000);

// here both chnages will be done at the same time 

//-----------------------------------------------------------

// callback hell  
// nested callBacks
// one setTimeout is dependent on the another one setTimeout

setTimeout(()=>{

    heading1.textContent = "one";         // change1 in H1
    heading1.style.color = "violet";      // change1 in H1

    setTimeout(()=>{
        heading2.textContent = "two";
        heading2.style.color = "purple";
    },4000)

},2000)

// here MINimum time for the changes in heading is 2sec and after the change1 and change2 in H1 
// there is another setTimeout for the H2 changes
// means firstly H1 me changes honge and after that 4sec H2 me chnages honge


//-----------------------------------------------------------------
//-----------------------------------------------------------------

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(()=>{
      if(element){
        element.textContent = text;
        element.style.color = color;
        if(onSuccessCallback){
          onSuccessCallback();
        }
      }else{
        if(onFailureCallback){
          onFailureCallback();
        }
      }
    },time)
  }
  // pyramid of doom
  changeText(heading1, "one","violet",1000,()=>{
    changeText(heading2, "two","purple",2000,()=>{
      changeText(heading3, "three","red",1000,()=>{
        changeText(heading4, "four","pink",1000,()=>{
          changeText(heading5, "five","green",2000,()=>{
            changeText(heading6, "six","blue",1000,()=>{
              changeText(heading7, "seven","brown",1000,()=>{
                changeText(heading8, "eight","cyan",1000,()=>{
                  changeText(heading9, "nine","#cda562",1000,()=>{
                    changeText(heading10, "ten","dca652",1000,()=>{
                      
                    },()=>{console.log("Heading10 does not exist")})
                  },()=>{console.log("Heading9 does not exist")})
                },()=>{console.log("Heading8 does not exist")})
              },()=>{console.log("Heading7 does not exist")})
            },()=>{console.log("Heading6 does not exist")})
          },()=>{console.log("Heading5 does not exist")})
        },()=>{console.log("Heading4 does not exist")})
      },()=>{console.log("Heading3 does not exist")})
    },()=>{console.log("Heading2 does not exist")})
  },()=>{console.log("Heading1 does not exist")})



