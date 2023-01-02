// Variables
const loginForm = document.getElementById("login-form");


if (loginForm){
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailLogin = document.getElementById("email-log").value;
    const passwordLogin = document.getElementById("password-log").value;

    var user = localStorage.getItem(email);
    var data = JSON.parse(User);
    console.log(data);
    if (emailLogin == data.Email && passwordLogin == data.Password) {
        alert("we did it broo!!!");
    }
    


    if (emailLogin === "" || passwordLogin === "") {
        console.log(testGlobal);
        alert("Please fill all fields")
    }
  


    // Les tests en utilisant localStorage.getItem(key); s'a marche plus ;(
        
})
}






















// Variables







/*const loginForm = document.getElementById("login-form");


loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailLogin = document.getElementById("email").value;
    const passwordLogin = document.getElementById("password").value;
    


    var emailLogin_reg = JSON.parse(localStorage.getItem(user));
    var passwordLogin_reg = JSON.parse(localStorage.getItem(user));

    if (emailLogin === "" || passwordLogin === "") {
        alert("Please fill all fields")
    }/*
    else {

        User.forEach(element => {
            
        });
          
        localStorage.setItem('emailLogin', emailLogin);
        localStorage.setItem('passwordLogin', passwordLogin);
        if(localStorage.getItem(emailLogin) !== localStorage.getItem(emailLogin_reg)
         && localStorage.getItem(passwordLogin) !== localStorage.getItem(passwordLogin_reg)) {

                alert("Email or passwordLogin incorrect or the user not exists");

                console.log(passwordLogin_reg);
                console.log(emailLogin_reg);
   
        }
        else {
            alert("gj");
            console.log
        }
    }
 
})
*/ 


