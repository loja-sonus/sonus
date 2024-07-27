var email = "kevincomercialdrop@gmail.com";

function copiarEmail(){

    navigator.clipboard.writeText(email);
    
    alert("Copiado o e-mail da loja na área de transferência");
}