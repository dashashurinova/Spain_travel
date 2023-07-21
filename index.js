// document.getElementsByClassName('entrance').addEventListener ("submit",checkForm);
// let entrance__button=document.querySelector('.entrance__button');
// console.log(entrance__button);


function checkForm(el) {
    let login = document.querySelector('.login');
    console.log(login);
    let pass = document.querySelector('.password');
 let fail = "";
 if (login=="" || pass=="")
    fail = "Enter login and password"; 
    else if (login.length <= 1)
    fail = "Enter correct login";
if (fail != "")
document.getElementById("error").innerHTML = fail;
console.log(fail);
}

checkForm();