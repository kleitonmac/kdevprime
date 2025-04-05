emailjs.init("pTZyhJYaccnO1e2Wy");

document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();

  const statusMsg = document.getElementById("mensagem-status");
  statusMsg.classList.add("hidden");

  const form = this;
  const formData = {
    nome: form.nome.value,
    titulo: form.titulo.value,
    mensagem: form.mensagem.value,
  };

  emailjs.send("service_hwj3yyi", "template_f9lfv7l", formData)
    .then(() => {
      statusMsg.textContent = "Mensagem enviada com sucesso!";
      statusMsg.classList.remove("hidden");
      form.reset();
    })
    .catch((error) => {
      console.error("Erro ao enviar:", error);
      statusMsg.textContent = "Ocorreu um erro. Tente novamente.";
      statusMsg.classList.remove("text-green-600");
      statusMsg.classList.add("text-red-600");
      statusMsg.classList.remove("hidden");
    });
});