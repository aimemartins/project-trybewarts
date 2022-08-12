const email = 'tryber@teste.com';
const senha = '123456';
const button = document.getElementById('button');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

function validaLogin() {
  if (inputEmail.value === email && inputSenha.value === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', validaLogin);

// Questão 18 - Habilite o botão "Enviar" após a validação do checkbox
// Pesquisa feita em:
// https://cursos.alura.com.br/forum/topico-event-listner-em-um-checkbox-97348
// https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202

// desabilita botão no início
const habButton = document.getElementById('submit-btn');
habButton.disabled = true;

// captura do input (Você concorda com o uso das informações acima?)
const inputAgreement = document.getElementById('agreement');

function validaButton() {
  if (inputAgreement.checked) {
    habButton.disabled = false;
  } else {
    habButton.disabled = true;
  }
}
// cria o evento com as mudanças do botão
inputAgreement.addEventListener('change', validaButton);
