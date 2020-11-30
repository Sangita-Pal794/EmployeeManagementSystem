/**
* Password Requirements:
* The password must be minimum 8 characters long
* At least one upper case character.
* At least one lower case character.
* At least one number.
* At least one special character
*/
var count = 0;
validateFirstName = () => {

    const read = /^[A-Z]{1}[a-z]{2,}$/
    var patt = new RegExp(read);
    var input = document.getElementById("exampleInputFirstName").value;
    const pattern = patt.test(input)

    console.log(pattern)
    if (!pattern) {
        console.log("enter valid input");
        document.getElementById("error").innerHTML = "Invalid first name"
    }
    else {
        document.getElementById("error").innerHTML = " "
        count++;

    }
}
validateLastName = () => {

    const read = /^[A-Z]{1}[a-z]{2,}$/
    var patt = new RegExp(read);
    var input = document.getElementById("exampleInputLastName").value;
    const pattern = patt.test(input)

    if (!pattern) {
        console.log("enter valid input");
        document.getElementById("error1").innerHTML = "Invalid last name"
    }
    else {
        document.getElementById("error1").innerHTML = " "
        count++;
    }
}
validatePassword = () => {

    const read = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[*.!@$%^&(){}:;<>,.?/~_+=|-]).{8,}$/
    var patt = new RegExp(read);
    var input = document.getElementById("exampleInputPassword").value;

    const pattern = patt.test(input)

    if (!pattern) {
        console.log("enter valid input");
        document.getElementById("error3").innerHTML = "Invalid password"
    }
    else {
        document.getElementById("error3").innerHTML = " "
        count++;

    }
}
validateEmail = () => {

    let read = /^([a-zA-Z0-9_.$*&!+-]+)@([a-z0-9]+).([a-z.]{2,7})$/
    var patt = new RegExp(read);
    var input = document.getElementById("exampleInputEmail").value;
    const pattern = patt.test(input)

    if (!pattern) {
        console.log("enter valid input");
        document.getElementById("error2").innerHTML = "Invalid Email"
    }
    else {
        document.getElementById("error2").innerHTML = " "
        count++;

    }
}


function myFunction() {
    console.log("My fuction")
    let email = "sangitabdwn94@gmail.com"
    let password = "P@ss12345"
    if (document.getElementById("exampleInputEmail").value == email && document.getElementById("exampleInputPassword").value == password) {
        document.getElementById("demo").innerHTML = "Successfully logged in";
        window.open("Dashboard.html")
    }
    else
        document.getElementById("demo").innerHTML = "Sign Up";


}

function myFunc() {
    count++
    if (count >= 5) {
        document.getElementById("dem").innerHTML = "Successfully registered";
        window.open("Dashboard.html")
    }
    else
        document.getElementById("dem").innerHTML = "Enter all fields";


}


