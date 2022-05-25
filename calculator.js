console.log("js is working")

function submit() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    let sum = parseInt(number1) + parseInt(number2);
    document.getElementById("Add").value = sum;
    console.log(sum)
}


function subtract(){
    let subnum1 = document.getElementById("subnum1").value;
    let subnum2 = document.getElementById("subnum2").value;

    let sub = parseInt(subnum1) - parseInt(subnum2);
    document.getElementById("Subtract").value = sub;
    console.log(sub)
}

const division = () => {
    let divnum1 = document.getElementById("divnum1").value;
    let divnum2 = document.getElementById("divnum2").value;

    let divi = parseInt(divnum1) / parseInt(divnum2);
    document.getElementById("Division").value = divi;
    console.log(divi);
}

const multiply = () => {
    let multnum1 = document.getElementById("multnum1").value;
    let multnum2 = document.getElementById("multnum2").value;

    let mult = parseInt(multnum1) * parseInt(multnum2);
    document.getElementById("Multiply").value = mult;
    console.log(mult);
}




