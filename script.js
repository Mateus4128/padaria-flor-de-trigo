const form = document.getElementById("formContato");
const aviso = document.getElementById("aviso");
const campoEmail = document.getElementById("email");
const campoTelefone = document.getElementById("telefone");

// Exibe a mensagem verde quando o usuário volta do salvar.php
if (window.location.search.includes("enviado=1")) {
  aviso.style.color = "green";
  aviso.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
}

// Coloca parênteses, espaço e hífen automaticamente no telefone
campoTelefone.addEventListener("input", function() {
  let num = campoTelefone.value.replace(/\D/g, "").slice(0, 11);

  if (num.length > 6) {
    campoTelefone.value = "(" + num.slice(0, 2) + ") " + num.slice(2, 7) + "-" + num.slice(7);
  } else if (num.length > 2) {
    campoTelefone.value = "(" + num.slice(0, 2) + ") " + num.slice(2);
  } else if (num.length > 0) {
    campoTelefone.value = "(" + num;
  } else {
    campoTelefone.value = "";
  }
});

// Completa ".com" automaticamente ao sair do campo de e-mail
campoEmail.addEventListener("blur", function() {
  const email = campoEmail.value.trim();
  const partes = email.split("@");

  if (partes.length === 2 && partes[1] !== "" && !partes[1].includes(".")) {
    campoEmail.value = email + ".com";
  }
});


form.addEventListener("submit", function(event) {
  const nome = document.getElementById("nome").value.trim();
  const email = campoEmail.value.trim();
  const telefone = campoTelefone.value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || telefone === "" || mensagem === "") {
    event.preventDefault();
    aviso.style.color = "red";
    aviso.textContent = "Por favor, preencha todos os campos!";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    event.preventDefault();
    aviso.style.color = "red";
    aviso.textContent = "Digite um e-mail válido (ex: nome@email.com).";
    return;
  }
});