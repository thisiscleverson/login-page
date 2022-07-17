/*
    ----> Script Login <----

   Data: 16/07/2022
   Autor: Cleverson Emanuel Silva

*/
//importar modulos de avisos
import { warningBoxErro, warningInput } from "./warning.js";



//querySelector para pegar o formulario
const form__login = document.querySelector('.form__login');


//-------------------------------------------------------------------------------------------//
//objeto dos dados do login
const LoginData = {
    email:    NaN,
    password: NaN
}


//------------------------------------------[functions]--------------------------------------//
function check_Email(email){
    let Email = email.value;
    
    //separar usuário do provedor de email
    let user     = Email.split("@")[0]; // usuário
    let provider = Email.split("@")[1]; // provedor


        // verificar qual provedor é
    switch(provider){
        case "gmail.com":
            LoginData.email = user + "@" + provider;
        break;

        case "yahool.com":
            LoginData.email = user + "@" + provider;
        break;

        case "outlook.com":
            LoginData.email = user + "@" + provider;
        break;

        default:
            let msg = "❗ Seu provedor de email é desconhecido! Por favor use ['gmail','yahool' ou 'outlook']."
            warningBoxErro(msg); // mostrar erro do login [conta não registrada]
            return false;
    }

    return true;
}


function check_Password(password){
    let Password = password.value;

    if(Password.length > 7){
        LoginData.password = Password;
        warningInput('#aviso__password', '', '.div__input', '--color-darker-gray');
        return true;
    }
    else{
        let msg = 'Sua senha tem que ter no minimo 8 caracteres!'
        warningInput('#aviso__password', msg, '.div__input', 'red');
        return false; 
    }
}


function check_login(data){

    let dataIsValid = true;
    
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        
        //veficar se o email é valido
        if(key == data.email){
            let myItem = JSON.parse(localStorage.getItem(key));
            dataIsValid = true; 

            //verificar a senha
            if(myItem.password === data.password){
                //window.location = '../pages/thanks.html' // ir para página de usuário
                window.location = './pages/thanks.html' // ir para página de usuário [github pages]
                dataIsValid = true;
                return; 
            }else{
                dataIsValid = false; // dados não é valido
            }

        }else{
            dataIsValid = false; // dados não é valido
        }
    }

    // se os dados não for validos mostrar aviso.
    if(dataIsValid == false){
        let msg = "❗ Seus dados não conferem. Por favor, verifique se seus dados estão corretos."
        warningBoxErro(msg); // mostrar erro do login [conta não registrada]
    }
}


//_____________________________________________________________//
form__login.addEventListener('submit', function register(event){

    event.preventDefault();// não carregar a pagina

    let get_Email    = document.querySelector('.input__email');       // pegar a e-mail da caixa de input 
    let get_Password = document.querySelector('.input__senha');       // pegar a senha da caixa de input 

    //---------------------------------------------------//
    let emailOkay    = check_Email(get_Email);        // verificar o E-mail
    let passwordOkay = check_Password(get_Password);  // verificar a senha do usuário
    //---------------------------------------------------//

    if(emailOkay == true && passwordOkay == true){
        check_login(LoginData);  // verificar login
    }

})