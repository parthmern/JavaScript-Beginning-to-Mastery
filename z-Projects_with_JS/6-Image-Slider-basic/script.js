const slides = document.querySelectorAll(".slide");
console.log(slides);

let counter = 0;

// By using FOR-EACH method we can give (element,index)
// here we are applying the css style of TOP = "--" to the element 
// for first slide => img1 is 0% from the top of MAIN section bcz (index*100%) -- 0*100 %
// for second slide => img2 is 100% from the top of MAIN section bcz 1*100 %
// for third slide => img3 is 200% from the top of MAIN section bcz 2*100 %

slides.forEach( (slide, index) => {

    slide.style.top = `${index * 100}%` ;
})



const goPrev = () => {
    counter--;
    slideImage();
}

const goNext = () => {
    counter++;
    slideImage();
}

const slideImage = () => { slides.forEach( (slide,index) => {
        slide.style.transform = `translateY( - ${counter * 100}%)`
    })
}

