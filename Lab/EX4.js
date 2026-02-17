function SubmitButtonClick(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    let isValid = true;

    if (name == "") {
        document.getElementById("nameError").innerHtml = alert("Name field is required");
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").innerHtml = alert("Email field is required ");
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").innerHtml = alert("Password field is required");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
    
}