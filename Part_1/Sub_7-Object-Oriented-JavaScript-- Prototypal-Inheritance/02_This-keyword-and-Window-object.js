//This keyword, Window object

console.log(this); // {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(window); // {window: Window, self: Window, document: document, name: '', location: Location, …}


function myFunc(){
    
    console.log(this);
}

myFunc(); //{window: Window, self: Window, document: document, name: '', location: Location, …}


// If weare using
strict;


myFunc(); // then ERROR






