// FUNCTION VALIDAR EMAIL
function ValidaEmail(email){
    exp = /^[\w-]+(\.[\w-]+)*@(([\w-]{2,63}\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/
    if(!exp.test(email.value))
        alert('E-mail Invalido!');
}
