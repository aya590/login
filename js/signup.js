// Elements
var inputname = document.querySelector('#name');
var mail = document.querySelector('#mail');
var passward = document.querySelector('#passward');
var buttonup = document.querySelector("#btnup");
var massage = document.querySelector("#massege");

var datalist = [];

// Initialize datalist from localStorage
if (localStorage.getItem("datalist")) {
    datalist = JSON.parse(localStorage.getItem("datalist"));
}


// Events

buttonup.addEventListener('click',add)



function add(){ 
    if (isEmpty() != true) {
        if (isExist() != true) {
            var data ={
                name : inputname.value,
                mail: mail.value,
               passward: passward.value,
           }
           datalist.push(data);
           localStorage.setItem("datalist", JSON.stringify(datalist));
           
           displayError('Success')
           massage.style.color ="green" ;
        }
       
    }
    
}


function isEmpty() {
    if (inputname.value == '' ||  mail.value == '' || passward.value =='') {
        displayError('All inputs is required')
        massage.style.color ="red" ;
        return true
    }
}


function isExist() {
    for (var i = 0; i < datalist.length; i++) {
        if (mail.value == datalist[i].mail) {
            displayError('email already exists')
            massage.style.color ="red" ;
            return true
        }
    }
}


function displayError(message) {
   massage.classList.replace('d-none', 'd-block')
   massage.innerHTML = message
}



