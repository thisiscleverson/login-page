/*
    autor: Cleverson Emanuel Silva
    data:  12/07/2022
    repositorio:
    descrição: script de realizar cadastro

*/
//--------------------------------------------------------------------------------------------------------------------//
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
    
    if(Name.length > 4){ // verificar se os caracteres é maior que 4
       // verificar se o sobrenome não tem os caracters especiais atraves de uma lista de caracteres
       for(let i=0; i < character.length; i++){
            if(Name.includes(character[i])){
                console.log('somente letras (a - z), números(0 - 9) e pontos(.) são permitidos!');
                return;
            }
        }
        personData.name = Name; // gardar o sobrenome para o envio da dados

    }
    else{
        console.log('seu nome tem o n° de letras insuficientes!');
    }
}


function check_Surname(surname){
    let Surname = surname.value;
    const character = ['!','@','#','$','%','¨','&','*','(',')','-','=','+']; // lista de caracteris não permitido
    
    if(Surname.length > 4){ // verificar se os caracteres é maior que 4
       // verificar se o sobrenome não tem os caracters especiais atraves de uma lista de caracteres
       for(let i=0; i < character.length; i++){
            if(Surname.includes(character[i])){
                console.log('somente letras (a - z), números(0 - 9) e pontos(.) são permitidos!');
                return;
            }
        }
        personData.surname = Surname; // gardar o sobrenome para o envio da dados

    }
    else{
        console.log('seu sobrenome tem o n° de letras insuficientes!');

    }
}


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
                personData.email = user + "@" + provider;
            break;

            case "yahool.com":
                personData.email = user + "@" + provider;
            break;

            case "outlook.com":
                personData.email = user + "@" + provider;
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
        personData.password = Password;
    }
    else{
        console.log('Sua senha tem que ter no minimo 8 caracteres!')
    }
}


function salve_data(data){

    //verificar a lista de dados do usuário não contém [NaN]
    if(data.name === NaN){
        console.log('erro ao cadastrar o nome')
        return
    }
    if(data.surname === NaN){
        console.log('erro ao cadastrar o sobrenome')
        return
    }
    if(data.email === NaN){
        console.log('erro ao cadastrar o email')
        return
    }
    if(data.password === NaN){
        console.log('erro ao cadastrar o senha')
        return
    }
    //_________________________________________________//
    
    //verificar se a conta já é registrada
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        
        if(key == data.email){
            console.log('conta já existente!');
        }
        
      }

      localStorage.setItem(data.email, JSON.stringify(data)); // salvar cadastro no local storage do navegador

}

//--------------------------------------------------------------------------------------------------------------------//
form.addEventListener('submit', function register(event){

    event.preventDefault();// não carregar a pagina

    let get_Name     = document.querySelector('.input__nome');        // pegar o nome do campo da input
    let get_Surname  = document.querySelector('.input__sobrenome');   // pegar o sobrenome da caixa da input
    let get_Email    = document.querySelector('.input__email');       // pegar a e-mail da caixa de input 
    let get_Password = document.querySelector('.input__senha');       // pegar a senha da caixa de input 

    //---------------------------------------------------//
    check_Name(get_Name);         // verificar o nome
    check_Surname(get_Surname);   // verificar o sobrenome
    check_Email(get_Email);       // verificar o E-mail
    check_Password(get_Password); // verificar a senha do usuário
    //---------------------------------------------------//

    salve_data(personData);
    window.location = '../index.html' // ir para página de login
    
})


