/*
    modulo para gerenciar os avisos de erro para o usuário
*/



function warningLoginErro(msg){
    let caixa_aviso = document.querySelector('#caixa__avisos');
    caixa_aviso.classList.add("caixa__avisos");
    caixa_aviso.textContent = msg;

}


function warningInput(id, msg, changeStyle, color){
    let caixa_aviso = document.querySelector(id);
    let changeStyleInput = document.querySelector(changeStyle);

    caixa_aviso.classList.add("aviso__input");
    caixa_aviso.textContent = msg;

    changeStyleInput.style.setProperty('--color-border', color);;
}




// exporta modulo 
export { warningLoginErro, warningInput };