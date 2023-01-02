
// Variables 

const registerForm = document.getElementById("register-form");


    
});

if (registerForm) {
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const username = document.getElementById("username").value;
    
    
    // User 
    var User = [{Email:email, Password:password, Username:username}];
    // Stock data
    var dataUser = JSON.stringify(User);

       //minimum length
    var minimumLength = 8;

    //Set required character sets 
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

    // Initialize error message: 
    var errorMessage = "";

    if (email === "" || password === "" || username === "" || confirmPassword === "") {
        errorMessage = "Please fill all fields";
        
    }
    //check password length 
    else if (password.length < minimumLength) {
        errorMessage = "Password must be at least " + minimumLength + " characters long.";
    }
    else if (!password.match(lowerCase)) {
        errorMessage = "Password must contain at least  one lowercase letter";
    }
    else if (!password.match(upperCase)){
        errorMessage = "Password must contain at least one uppercase letter";
    }
    else if (!password.match(numbers)){
        errorMessage = "Password must contain at least one number";
    }
    else if (!password.match(specialCharacters)) {
        errorMessage = "Password must contain at least one special character";
    }

    //check confirm password match with password
    else if(confirmPassword.match(password)){
        errorMessage = "Confirm password does not match the password please retype it";
    }

    //return error message or success message
    if(errorMessage) {
        document.getElementById("errorMessage").innerHTML = errorMessage;    
    }
    else {
        localStorage.setItem(email, dataUser);   
        window.location.href = "index.html";
        
      //  window.location.replace("./login.html");
        return  alert("Sing up is successful, you can log in now !") /*document.getElementById("registerValid").innerHTML = "Sing up is successful, you can log in now !"*/;
    }
})

}
 
console.log(email);




























