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
