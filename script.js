let passInput = document.getElementById("password");
let letter = document.getElementById("letter");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let length = document.getElementById("length");

passInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

passInput.onblur = function() {
    document.getElementById("meassage").style.display = "none";
}

passInput.onkeyup = function(){
    let lowerCaseLetters = /[a-z]/g;
    if(passInput.value.match(lowerCaseLetters)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }else{
        letter.classList.remove("valid");
        letter.classList.add("invalid")
    }

    let UpperCaseLetters = /[A-Z]/g;
    if(passInput.value.match(UpperCaseLetters)){
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    }else{
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }

    let numbers = /[0-9]/g;
    if(passInput.value.match(numbers)){
        numbers.classList.remove("invalid");
        numbers.classList.add("valid");
    }else{
        numbers.classList.remove("valid");
        numbers.classList.add("invalid");
    }

    if(passInput.value.length >= 8){
        length.classList.remove("invalid");
        length.classList.add("valid");
    }else{
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}