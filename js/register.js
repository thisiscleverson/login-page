/*
    autor: Cleverson Emanuel Silva
    data:  12/07/2022
    repositorio:
    descrição: script de realizar cadastro

*/
//--------------------------------------------------------------------------------------------------------------------//

import { warningBoxErro, removeWarningBoxErro, warningInput } from "./warning.js";


const form = document.querySelector('.form__login');


//objetos with person data
const personData = {
    name:     NaN,
    surname:  NaN,
    email:    NaN,
    password: NaN
}


//funções 
function check_Name(name){
    let Name = name.value;
    const character = ['!','@','#','$','%','¨','&','*','(',')','-','=','+']; // lista de caracteris não permitido
    
    if(Name.length >= 4){ // verificar se os caracteres é maior que 4
        // verificar se o sobrenome não tem os caracters especiais atraves de uma lista de caracteres
        for(let i=0; i < character.length; i++){
            if(Name.includes(character[i])){
                let msg = '"nome" deve conter apenas caracteres alfanuméricos.';
                warningInput('#warning_name', msg,'.input__nome','red');
                return false;
            }
        }
        personData.name = Name; // gardar o sobrenome para o envio da dados
        warningInput('#warning_name', '','.input__nome','--color-darker-gray');
        return true;

    }
    else{
        let msg = 'Seu nome tem que ter no minimo 4 letra';
        warningInput('#warning_name', msg,'.input__nome','red');
        return false;
    }
}


function check_Surname(surname){
    let Surname = surname.value;
    const character = ['!','@','#','$','%','¨','&','*','(',')','-','=','+']; // lista de caracteris não permitido
    
    if(Surname.length > 4){ // verificar se os caracteres é maior que 4
       // verificar se o sobrenome não tem os caracters especiais atraves de uma lista de caracteres
       for(let i=0; i < character.length; i++){
            if(Surname.includes(character[i])){
                let msg = '"sobrenome" deve conter apenas caracteres alfanuméricos.';
                warningInput('#warning_surname', msg,'.input__sobrenome','red');
                return false;
            }
        }
        personData.surname = Surname; // gardar o sobrenome para o envio da dados
        warningInput('#warning_surname', '','.input__sobrenome','--color-darker-gray');
        return true;
    }
    else{
        let msg = 'Seu sobrenome tem que ter no minimo 4 letra';
        warningInput('#warning_surname', msg,'.input__sobrenome','red');
        return false;
    }
}


function check_Email(email){
    let Email = email.value;

    //separar usuário do provedor de email
    let user     = Email.split("@")[0]; // usuário
    let provider = Email.split("@")[1]; // provedor


        // verificar qual provedor é
    switch(provider){
        case "gmail.com":
            warningInput('#warning_email', '','.input__email','--color-darker-gray');
            personData.email = user + "@" + provider;
            return true;
        break;

        case "yahool.com":
            warningInput('#warning_email', '','.input__email','--color-darker-gray');
            personData.email = user + "@" + provider;
            return true;
        break;

        case "outlook.com":
            warningInput('#warning_email', '','.input__email','--color-darker-gray');
            personData.email = user + "@" + provider;
            return true;
        break;

        default:
            let msg = "Seu provedor de email é desconhecido! Por favor use ['gmail','yahool' ou 'outlook']."
            warningInput('#warning_email', msg,'.input__email','red');
            return false;
    }

}


function check_Password(password){
    let Password = password.value;

    if(Password.length > 7){
        personData.password = Password;
        warningInput('#warning_password', '','.div__input','--color-darker-gray');
        return true;
    }
    else{
        let msg = 'Sua senha tem que ter no minimo 8 caracteres!'
        warningInput('#warning_password', msg,'.div__input','red');
        return false;
    }
}


function salve_data(data){

    let already_exists = false;
    
    //verificar se a conta já é registrada
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        
        if(key == data.email){
            already_exists = true;
            break;
        }else{
            already_exists = false;
        }
        
      }

      if(already_exists == false){
            removeWarningBoxErro();
            warningInput('#warning_email', '','.input__email','--color-darker-gray');
            localStorage.setItem(data.email, JSON.stringify(data)); // salvar cadastro no local storage do navegador
            window.location = '../index.html' // ir para página de login*/
      }else{
        let msg = "❗ Essa conta já é registrada!"
        warningInput('#warning_email', '', '.input__email','red')
        warningBoxErro(msg); // mostrar erro do login [conta não registrada]
      }

}

//--------------------------------------------------------------------------------------------------------------------//
form.addEventListener('submit', function register(event){

    event.preventDefault();// não carregar a pagina

    let get_Name     = document.querySelector('.input__nome');        // pegar o nome do campo da input
    let get_Surname  = document.querySelector('.input__sobrenome');   // pegar o sobrenome da caixa da input
    let get_Email    = document.querySelector('.input__email');       // pegar a e-mail da caixa de input 
    let get_Password = document.querySelector('.input__senha');       // pegar a senha da caixa de input 

    //---------------------------------------------------//
    let nameOkay     = check_Name(get_Name);         // verificar o nome
    let surnameOkay  = check_Surname(get_Surname);   // verificar o sobrenome
    let emailOkay    = check_Email(get_Email);       // verificar o E-mail
    let passwordOkay = check_Password(get_Password); // verificar a senha do usuário
    //---------------------------------------------------//

    if(nameOkay == true && surnameOkay == true && emailOkay == true && passwordOkay == true){
        removeWarningBoxErro();
        salve_data(personData);
    }
    else{
        let msg = "❗ foi impossível cadastrar sua conta. Por favor, verifique seus dados."
        warningBoxErro(msg); // mostrar erro do login [conta não registrada]
    }
    
})


