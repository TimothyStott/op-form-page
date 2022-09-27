const submitBtn = document.getElementById("submitBtn");
document.addEventListener('mousemove',checkPasswords);
document.addEventListener('keydown',checkPasswords);


function checkPasswords(){
    let pass1 = document.getElementById("password");
    let pass2 = document.getElementById("password_2");
    if(pass1.value!=pass2.value){
        submitBtn.disabled = true;
        console.log(submitBtn);
    }

    else{
        submitBtn.disabled = false;
    }
}



