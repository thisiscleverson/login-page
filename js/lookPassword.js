const button_eye = document.querySelector('.eye__button')



function clickButtonEye(){
    let input__password = document.querySelector('.input__senha')

    if(input__password.type == "password"){  // mostrar senha
        input__password.type = "text"

        if(input__password.name == "input__senha-login"){ // verificar atraves do name do input qual diretorio usar
            button_eye.src = "./imgs/eye-close.svg"
        }else{
            button_eye.src = ".././imgs/eye-close.svg"
        }

    }else{ // ocultar senha
        input__password.type = "password"

        if(input__password.name == "input__senha-login"){ // verificar atraves do name do input qual diretorio usar
            button_eye.src = "./imgs/eye-open.svg"
        }else{
            button_eye.src = ".././imgs/eye-open.svg"
        }
    }
}



button_eye.addEventListener('click', clickButtonEye)