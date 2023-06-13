// More events

// keypress event
// mouseover event

const body = document.body;

body.addEventListener("keypress",(e)=>console.log(e.key)); // jo bhi key board me key tap kroge wo dikhegi

// mouseover- mouse jab hover hoga wo element par tab excecute hoga
const mainButton = document.querySelector(".btn-headline");
console.log(mainButton);
mainButton.addEventListener("mouseover", () => {
  console.log("mouseover event ocurred!!!");
});

// mouseleave - jab mouse leave hoga hover k baad wo element par tab ye event occur hoga
mainButton.addEventListener("mouseleave", () => {
  console.log("mouseleave event ocurred!!!");
});


