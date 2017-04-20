    // FUNCTION VALIDAR EMAIL
    function ValidaEmail(email){
        exp = /^[\w-]+(\.[\w-]+)*@(([\w-]{2,63}\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/
        if(!exp.test(email.value))
            alert('E-mail Invalido!');
    }

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
    if(document.getElementById('rg').value.length == 0){
        alert('Informe seu RG.');
        document.getElementById("rg").focus();
        return false;
    }
    if(document.getElementById('cpf').value.length == 0){
        alert('Informe seu CPF.');
        document.getElementById("cpf").focus();
        return false;
    }
    if(document.getElementById('ctps').value.length == 0){
        alert('Informe seu CTPS.');
        document.getElementById("ctps").focus();
        return false;
    }
    if(document.getElementById('nascimento').value.length == 0){
        alert('Informe a data de nascimento.');
        document.getElementById("nascimento").focus();
        return false;
    }
    if(document.getElementById('quantosFilhos').value.length == 0){
        alert('Informe quantos filhos possui.');
        document.getElementById("quantosFilhos").focus();
        return false;
    }
    if(document.getElementById('celular').value.length == 0){
        alert('Informe seu telefone celular.');
        document.getElementById("celular").focus();
        return false;
    }
    if(document.getElementById('email').value.length == 0){
        alert('Informe seu e-mail.');
        document.getElementById("email").focus();
        return false;
    }
    /*if(document.getElementById('estado4').value.length == 0){
     alert('Informe o estado.');
     document.getElementById("estado4").focus();
     return false;*/
    if(document.getElementById('estados').value.length == 0){
        alert('Informe o estado.');
        document.getElementById("estados").focus();
        return false;
    }
    /*if(document.getElementById('cidade4').value.length == 0){
     alert('Informe a cidade.');
     document.getElementById("cidade4").focus();
     return false;*/
    if(document.getElementById('cidades').value.length == 0){
        alert('Informe a cidade.');
        document.getElementById("cidades").focus();
        return false;
    }
    if(document.getElementById('endereco').value.length == 0){
        alert('Informe seu endereço.');
        document.getElementById("endereco").focus();
        return false;
    }
    if(document.getElementById('escolaridade').value.length == 0){
        alert('Informe a escolaridade.');
        document.getElementById("escolaridade").focus();
        return false;
    }
    if((!f.situacao[0].checked) && (!f.situacao[1].checked) && (!f.situacao[2].checked)){
        alert('Informe a situação.');
        return false;
    }

    if((!f.possuiLeitura[0].checked) && (!f.possuiLeitura[1].checked)){
        if(!f.possuiLeitura[1].checked){
            if(document.getElementById('idioma_leitura').value.length == 0){
                alert('Informe em qual língua você possui domínio para leitura.');
                return false;
            }
        }
    }

    if((!f.possuiFala[0].checked) && (!f.possuiFala[1].checked)){
        if(!f.possuiFala[1].checked){
            if(document.getElementById('idioma_fala').value.length == 0){
                alert('Informe em qual língua você possui domínio para fala.');
                return false;
            }
        }
    }

    if((!f.possuiEscrita[0].checked) && (!f.possuiEscrita[1].checked)){
        if(!f.possuiEscrita[1].checked){
            if(document.getElementById('idioma_escrita').value.length == 0){
                alert('Informe em qual língua você possui domínio para escrita.');
                return false;
            }
        }
    }

    if((!f.informatica[0].checked) && (!f.informatica[1].checked) && (!f.informatica[2].checked)){
        alert('Informe o nível de conhecimento em informática.');
        return false;
    }

    if((!f.cursos[0].checked) && (!f.cursos[1].checked)){
        alert('Informe se possui algum curso.');
        return false;
    }

    if(!f.cursos[0].checked){
        /* checkbox areaAtuacao */
        var cursosExtra = document.getElementsByName('cursosExtra[]');
        var chklength = cursosExtra.length;
        var count = 0;
        for(i = 0 ; i < chklength; i++) {
            if (cursosExtra[i].checked) {
                count++;
            }
        }
    }
    /*
     if (count == 0) {
     alert('Informe quais cursos extras você possui.');
     return false;
     }
     */
    /* */
    if((!f.experienciaProfissional[0].checked) && (!f.experienciaProfissional[1].checked)){
        alert('Informe se possui experiência profissional.');
        return false;
    }
    if(f.experienciaProfissional[0].checked){
        if(document.getElementById('ocupacao').value.length == 0){
            alert('Informe a ocupação.');
            return false;
        }
        if((!f.carteira[0].checked) && (!f.carteira[1].checked)){
            alert('Informe se possui carteira profissional.');
            return false;
        }
    }
    if((!f.jovemAprendiz[0].checked) && (!f.jovemAprendiz[1].checked)){
        alert('Informe se já participou de algum programa Jovem Aprendiz.');
        return false;
    }
    if(f.jovemAprendiz[0].checked){
        if(document.getElementById('jovemAprendizCurso').value.length == 0){
            alert('Informe qual curso.');
            document.getElementById("jovemAprendizCurso").focus();
            return false;
        }
        if(document.getElementById('jovemAprendizEmpresa').value.length == 0){
            alert('Informe qual empresa.');
            document.getElementById("jovemAprendizEmpresa").focus();
            return false;
        }
    }

    document.forms[0].submit();
}
