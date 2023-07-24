function checkForm() {
    let copy = document.querySelectorAll('.entrance__log');
    let login =(copy[0].value);
    let pass =(copy[1].value);
    let fail = "";
    if (login=="" || pass=="")
        fail = "Enter login and password"; 
    else if (login.length <= 1)
        fail = "Enter correct login";
    if (fail != "")
        document.getElementById("error").innerHTML = fail;
    return fail;
}
