/*
    ----> Script Login <----

   Data: 16/07/2022
   Autor: Cleverson Emanuel Silva

*/

const form__login = document.querySelector('.form__login');


//-------------------------------------------------------------------------------------------//
const LoginData = {
    email:    NaN,
    password: NaN
}


//------------------------------------------[functions]--------------------------------------//
function check_Email(email){
    let Email = email.value;
    const character = ['!','@','#','$','%','¨','&','*','(',')','-','=','+']; // lista de caracteris não permitido

    //separar usuário do provedor de email
    let user     = Email.split("@")[0]; // usuário
    let provider = Email.split("@")[1]; // provedor

    //verificar se os caracteres é menor que o permitido
    if(user.length > 4){ // verificar se os caracteres é maior que 4
        // verificar se o usuário não tem os caracters especiais atraves de uma lista de caracteres
        for(let i=0; i < character.length; i++){
            if(user.includes(character[i])){
                console.log('1: somente letras (a - z), números(0 - 9) e pontos(.) são permitidos!');
                return;
            }
        }

        //verificar se o provedor não é menor que 4
        
            // verificar se o provedor não tem os caracters especiais atraves de uma lista de caracteres
        for(let i=0; i < character.length; i++){
            if(provider.includes(character[i])){
                console.log('2: somente letras (a - z), números(0 - 9) e pontos(.) são permitidos!');
                return;
            }
        }
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
                console.log('e-mail desconhecido!')
        }

    }else{
        console.log('1: seu sobrenome tem o n° de letras insuficientes!');
    }

}


function check_Password(password){
    let Password = password.value;

    if(Password.length > 7){
        LoginData.password = Password;
    }
    else{
        console.log('Sua senha tem que ter no minimo 8 caracteres!')
    }
}


function check_login(data){
    
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        
        //veficar se o email é valido
        if(key == data.email){
            let myItem = JSON.parse(localStorage.getItem(key));
            console.log(myItem);

            //verificar a senha
            if(myItem.password === data.password){
                window.location = '.././pages/user.html' // ir para página de usuário
            }
        }
    }

      console.log('Conta não registrada!')
}


//_____________________________________________________________//
form__login.addEventListener('submit', function register(event){

    event.preventDefault();// não carregar a pagina

    let get_Email    = document.querySelector('.input__email');       // pegar a e-mail da caixa de input 
    let get_Password = document.querySelector('.input__senha');       // pegar a senha da caixa de input 

    //---------------------------------------------------//
    check_Email(get_Email);       // verificar o E-mail
    check_Password(get_Password); // verificar a senha do usuário
    //---------------------------------------------------//
    check_login(LoginData)
    
    
})