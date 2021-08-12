const username = document.getElementById("username")
const password = document.getElementById("password")
const login = document.getElementById("login")
const error = document.getElementById("problem")

login.addEventListener("click",function(){
    if(username.value === "username246" && password.value === "password246"){
        error.innerHTML = "Successful login"
        error.style.backgroundColor = "lightgreen"
    }
    else if(username.value === "" && password.value === ""){
        error.innerHTML = "Please type your username and password"
        error.style.backgroundColor = "yellow"
    }
    else{
        error.innerHTML = "Incorrect username or password"
        error.style.backgroundColor = "red"
    }
})