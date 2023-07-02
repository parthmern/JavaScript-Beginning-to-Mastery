const pupils = document.getElementsByClassName('pupil');
console.log(pupils); // array like object (html colllection)

let pupilArr = Array.from(pupils);
console.log(pupilArr); //array

let pupilStartPoint = 300;
let pupilRange = 100;

const run = (e) =>{
    console.log(e.clientX);
    console.log(e.clientY);

    clientX = e.clientX - 600;
    clientY = e.clientY - 342 ;

    windowXRange = window.innerWidth;
    windowYRange = window.innerHeight;



    rangeX = clientX / windowXRange  ;
    console.log(rangeX);

    rangeY = clientY / windowYRange ;
    console.log(rangeY);

    pupilArr.forEach(element => {

        console.log(element);

        const X =   rangeX * 70 ;
        const Y = rangeY * 50 ;

        console.log("transformX= " , `translateX(${X}px)`)
        console.log("transformY= " , `translateY(${Y}px)`)


        // element.style.transform = `translateX(${X}px)`;
        // element.style.transform = `translateY(${Y}px)`;

        element.style.transform = `translate(${X}px, ${Y}px)`



    });

    

}

window.addEventListener('mousemove',run);

