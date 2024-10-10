// Elements
var mail = document.querySelector('#mail');
var passward = document.querySelector('#passward');
var buttonin = document.querySelector("#btnin");
var massage = document.querySelector("#massege");

var datalist = [];


if (localStorage.getItem("datalist")) {
    datalist = JSON.parse(localStorage.getItem("datalist"));
}


// Event 
buttonin.addEventListener('click', loging);


// function


function loging() {
    if (isEmpty() != true)
    { for (var i = 0; i < datalist.length; i++) {
        if (mail.value == datalist[i].mail && passward.value == datalist[i].passward) {
            localStorage.setItem("currentUserName", datalist[i].name);
                localStorage.setItem("currentUserMail", datalist[i].mail);
            window.location.href = "home.html";
            crlearinputs();
        
}
   
        }
    }else{
        displayError("incorrect email or password")
        massage.style.color ="red" ;
}
}


function isEmpty() {
    if (mail.value === '' || passward.value === '') {
        displayError('All inputs are required');
        massage.style.color = "red";
        return true;
    }
   
}


function displayError(message) {
    massage.classList.replace('d-none', 'd-block');
    massage.innerHTML = message;
}

function crlearinputs(){
    mail.value=""
    passward.value=""
  }
