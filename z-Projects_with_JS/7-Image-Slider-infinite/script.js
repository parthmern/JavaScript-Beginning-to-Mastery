let slides = document.querySelectorAll(".slide");
console.log(slides);

let count = 0;

slides.forEach(function(slides,index){
    // slides.style.left =`*{index * 100}%` ;
}
);

function myFunc(){
    slides.forEach(function(images){
        images.style.transform = `translateX(-${count * 100}%)`
    })
    
}

function next(){
    count ++ ;

    console.log(slides.length);

    if(count == slides.length){
        count = 0;
    }

    myFunc();
}


function pre(){
    count -- ;

    console.log(slides.length);

    if(count == -1){
        count = slides.length-1;
    }

    myFunc();
}