document
  .getElementById("Form-Validation")
  .addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();
    let userName = document.getElementById("userName").value.trim();
    let mail = document.getElementById("mail").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    let userNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let mailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;


    let usererror = document.getElementById("userName-error");
    let mailerror = document.getElementById("mail-error");
    let passworderror = document.getElementById("password-error");
    let cPasserror = document.getElementById("confirmPassword-error");

    if (userName === "") {
      usererror.innerText = "*Name is Required";
    }
    else if(!userNamePattern.test(userName)){
        usererror.innerText = "*Enter Your Full Name"
    }
     else if(!userNamePattern.test(userName)){
        usererror.innerText = ""
    }
    if (mail === "") {
      mailerror.innerText = "*Email is Required";
    }
    else if(!mailPattern.test(mail)){
        mailerror.innerText = "*Enter a valid email"
    }
    if (password === "") {
      passworderror.innerText = "*Password is Required";
    }
     else if (password.length < 6) {
      passworderror.innerText = "*Password must be atleast 6 characters";
    }
    if (confirmPassword === "") {
      cPasserror.innerText = "*ConfirmPassword is Required";
    }
    else if (password !== confirmPassword) {
      cPasserror.innerText = "*Passwords do not match";
    }
  });

  
