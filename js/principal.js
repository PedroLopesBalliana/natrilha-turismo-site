// principal.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  // cria dinamicamente a div de mensagem
  const mensagemSucesso = document.createElement("div");
  mensagemSucesso.classList.add("mensagem-sucesso");
  mensagemSucesso.style.display = "none"; // começa invisível
  mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
  form.parentNode.insertBefore(mensagemSucesso, form); // insere acima do formulário

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede envio padrão

    // mostra a mensagem
    mensagemSucesso.style.display = "block";

    // limpa os campos
    form.reset();

    // esconde a mensagem depois de alguns segundos
    setTimeout(() => {
      mensagemSucesso.style.display = "none";
    }, 4000);
  });
});
