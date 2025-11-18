//corectbadmin credentials//
const ADMIN_EMAIL ="admin@gmail.com";
let storedPassword =localStorage.getItem("ADMIN_PASSWORD") ||"123456";

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email =document.getElementById("email").value.trim();
        const Password =document.getElementById("password").value.trim();

    //check credentials
    if (email === ADMIN_EMAIL && Password === storedPassword){

        //redirect to dashboard//
        window.location.href ="index.html";
    } else{
        errorMessage.textContent ="Invalid email or password! please try again";
    }
}); 
});
