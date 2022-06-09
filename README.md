<h1 align="center">Cadastro</h1>
<p align="center">Este projeto consiste na criação de um cadastro pessoal para uma Refugiada Ucraniana, 
  este documento será para a explicação do código em JS.</p>
<p align="center">
 <a href="#CEP">• Para recuperar o endereço do usuário através do CEP informado, inicialmente foi criado a variável CEP e recuperado o elemento HTML
  através do querySelector pelo atributo id=CEP, com o CEP informado defini um valor para ele. Posteriormente vinculei um evento ao input CEP 'blur',
  para que ocorra de fato a consulta ao CEP, em seguida inseri uma função para que seja recuperado o valor digitado no campo CEP e uma variável script
   para criar uma requisição através da URL informada no código e inseri essa nova tag pelo document.body.appendChild(script). </a> 
  </p>
<p align="center">
  <a href="#senha">• Criei uma variável password e confirm_password e atribui o id senha e confirmar senha, após chamei a função validate password
  e criei uma condição para que as senhas sejam validas e iguais, em caso de senhas diferentes, irá gerar um alerta. </a> 
  </p>
<p align="center">
  <a href="#mostrarocultarsenha">• Inseri uma função mostrarOcultarSenha e atribuir um valor a ela condicionada a senha para que seja ocultado os 
   números ao digitar.</a> 
</p>
