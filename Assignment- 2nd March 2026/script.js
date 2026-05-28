const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    const message = document.getElementById("message");

    // Clear Errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    message.textContent = "";

    let isValid = true;

    // Name Validation
    if(name === ""){
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Email Validation
    if(!email.includes("@")){
        emailError.textContent = "Enter valid email";
        isValid = false;
    }

    // Password Validation
    if(password.length < 6){
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Success Message
    if(isValid){
        message.style.color = "green";
        message.textContent = "Form Submitted Successfully";
    }
});
