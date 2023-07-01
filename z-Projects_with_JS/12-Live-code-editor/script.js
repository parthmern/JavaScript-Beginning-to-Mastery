const html_code = document.querySelector(".html-code textarea");
console.log(html_code);

const css_code = document.querySelector(".css-code textarea");
console.log(css_code);

const js_code = document.querySelector(".js-code textarea");
console.log(js_code);

const result = document.querySelector("#result");
console.log(result);

// event listner while live typing

function run(){
    console.log("calling run");
    console.log(localStorage.js);

    // storing the anything in localStorage of browser that 
    // you can find as KEY - VALUE pair in application in inspect element 

    localStorage.setItem('html',html_code.value);
    localStorage.setItem('css',css_code.value);
    localStorage.setItem('js',js_code.value);

    result.contentWindow.document.head.innerHTML = `<style> ${localStorage.css} <style> ` ;
    result.contentWindow.document.body.innerHTML = `${ html_code.value}`;
    console.log(result.innerHTML);
    result.contentWindow.eval(localStorage.js);


}

// html_code.addEventListener('onkeyup',run());
// css_code.addEventListener('onkeyup',run());
// js_code.addEventListener('onkeyup',run());

html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();



html_code.value = localStorage.html;
css_code.value = localStorage.css;
js_code.value = localStorage.js;