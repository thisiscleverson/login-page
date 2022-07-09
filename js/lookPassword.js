const button_eye = document.querySelector('.eye__button')


function clickButtonEye(){
    let input__password = document.querySelector('.input__senha')

    if(input__password.type == "password"){
        input__password.type = "text"
        button_eye.src = "/imgs/eye-close.svg"

    }else{
        input__password.type = "password"
        button_eye.src = "/imgs/eye-open.svg"
    }
}



button_eye.addEventListener('click', clickButtonEye)