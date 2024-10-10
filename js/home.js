// Elements
var username = document.querySelector(".username");
var logout = document.querySelector(".btn-yellow");

var currentUserName = localStorage.getItem("currentUserName");






if (currentUserName) {
  
    username.textContent = currentUserName;
}

// event
logout.addEventListener('click', function () {
    localStorage.removeItem("currentUserName");
    localStorage.removeItem("currentUserMail")
    window.location.href = "login.html";
});
