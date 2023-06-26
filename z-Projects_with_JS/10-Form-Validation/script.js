let username = document.getElementById("username");
console.log(username);

let password = document.getElementById("password");
console.log(password);

let userError = document.getElementById("username-error");
let passError = document.getElementById("password-error");

let flag = 0 ;

function validtaeForm(){

    if(username.value == ""){
        console.log("empty username");
        userError.textContent = "empty username" ;

        flag = 0;
    }
    else if(username.value.length < 3){
        console.log(username.value.length);
        console.log("min 3 character required");
        userError.textContent = "min 3 character required" ;

        flag = 0;
    }
    else{
        userError.textContent = "" ;

        flag = 1;
    }

    if(password.value == ""){
        console.log("empty password");
        passError.textContent = "empty password" ;

        flag = 0;
    }
    else{
        passError.textContent = "" ;

        flag = 1;
    }

    if(flag == 1){
        return true;
    }

    else{
        return false;
    }




    
};

// when validtaeForm() this function return TRUE then form will be submitted
// if it returns FALSE then form will not be submitted