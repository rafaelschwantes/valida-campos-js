// FUNCTION ENVIAR (VALIDAÇÕES)
function enviar(){
    var f = document.getElementById('formulario');

    if(document.getElementById('nome').value.length == 0){
        alert('Informe seu nome.');
        document.getElementById("nome").focus();
        return false;
    }
    if((!f.sexo[0].checked) && (!f.sexo[1].checked)){
        alert('Selecione o sexo.');
        return false;
    }
    if(document.getElementById('nascimento').value.length == 0){
        alert('Informe a data de nascimento.');
        document.getElementById("nascimento").focus();
        return false;
    }
    if(document.getElementById('email').value.length == 0){
        alert('Informe seu e-mail.');
        //document.getElementById("email").focus();
        return false;
    }
    document.forms[0].submit();
}