
document.querySelector("#form1").addEventListener("submit",signinFunction)

var userData = JSON.parse(localStorage.getItem("signupData"))
function signinFunction(){

    event.preventDefault()
    
    var userEmail = document.querySelector("#email-input").value
    console.log(userEmail)
    var userPassword = document.querySelector("#Password-input").value
    console.log(userPassword)

    var flag = false
    userData.forEach(element => {

        if(element.emailAddress==userEmail && element.password==userPassword)
        {
            flag = true
        }
        
    });

    if(flag==true)
    {
        alert("login sucessfull")
    }
    else
    {
        alert("login not sucessfull")
    }

}

