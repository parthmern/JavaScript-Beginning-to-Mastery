//querySelector -- css selector type (tum jo bhi css me likhte ho  wo idhar likh sakte ho ex.#id and .class and div.class and div.headline h2)

// const mainHeading = document.getElementById("main-heading");

const mainHeading = document.querySelector("#main-heading"); //for ID (same as css like)

const header = document.querySelector(".header"); //for CLASS (same as css like)

//for selection of all classes, ids ,elements
const navItem = document.querySelectorAll(".nav-item")
console.log(navItem);



