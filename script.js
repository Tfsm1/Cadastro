let cep = document.querySelector("#cep");
let rua = document.querySelector("#rua");
let cidade = document.querySelector("#cidade");
let bairro = document.querySelector("#bairro");
let estado = document.querySelector("#estado");

cep.value = "";

cep.addEventListener("blur", function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm'
    document.body.appendChild(script);
});

function popularForm(resposta){

    if("erro" in resposta) {
        alert('CEP não encontrado');
        return;
    }

    console.log(resposta);
    rua.value = resposta.logradouro;
    cidade.value = resposta.localidade;
    bairro.value = resposta.bairro;
    estado.value = resposta.uf
};

var password = document.getElementById("senha")
var confirm_password = document.getElementById("confirmarsenha");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity('');
  }
}

senha.onchange = validatePassword;
confirmarsenha.onkeyup = validatePassword;

function mostrarOcultarSenha(){
    var senha=document.getElementById("senha")  
    if(senha.type=="password"){
        senha.type="text";
    }else{
        senha.type="password";
    }
}

