const submitBtn = document.getElementById("submitBtn");
window.addEventListener('keydown',checkPasswords);


function checkPasswords(){
    let pass1 = document.getElementById("password");
    let pass2 = document.getElementById("password_2");
    if(pass1!=pass2){
    }
    else{
        submitBtn.disabled = false;
    }
}



