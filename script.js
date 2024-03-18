var botao = document.getElementById("botao")
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome");

var saida= document.getElementById("saida-de-dados");

var email= document.getElementById("email");

var cep= document.getElementById("cep");

var telefone= document.getElementById("telefone");

var logradouro= document.getElementById("log");

var numero= document.getElementById("numero");

var comp= document.getElementById("comp");

var bairro= document.getElementById("bairro");

var cidade= document.getElementById("cid");

var estado= document.getElementById("estado");



function alertar(){
    //alert(nome.value = " " + "voce clicou no botao!!");
    saida.innerText= "nome:" + " " + nome.value + 
    "\n E-mail:" + " " + email.value,  
    "\n CEP:" + " " + cep.value,
    "\n Telefone:" + " " + telefone.value,  
    "\n Logrdouro:" + " " + log.value, 
    "\n Numero:" + " " + numero.value,
    "\n Complemento:" + " " + comp.value, 
    "\n Bairro:" + " " + bairro.value,
    "\n Cidade:" + " " + cid.value, 
    "\n Estado:" + " " + estado.value;
}