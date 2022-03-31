
document.querySelector("#form1").addEventListener("submit",signUpFunction);

var userInformation = JSON.parse(localStorage.getItem("signupData")) || []
function signUpFunction(){
    event.preventDefault()

    var userObj ={
        firstName: document.querySelector("#firstname").value,
        lastName:  document.querySelector("#lastname").value,
        emailAddress:  document.querySelector("#emailID").value,
        userName:  document.querySelector("#usernameName").value,
        password:  document.querySelector("#passwordNumber").value,

    };

    userInformation.push(userObj)

    localStorage.setItem("signupData",JSON.stringify(userInformation))

}
