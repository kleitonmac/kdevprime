
  (function() {
    emailjs.init("SEU_PUBLIC_KEY"); // Troque pelo seu Public Key do EmailJS
  })();

  const form = document.getElementById("form-contato");
  const msgStatus = document.getElementById("msg-status");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = form.nome.value;
    const titulo = form.titulo.value;
    const mensagem = form.mensagem.value;

    emailjs.send("service_hwj3yyi", "template_f9lfv7l", {
      nome: nome,
      titulo: titulo,
      mensagem: mensagem
    })
    .then(function(response) {
      console.log("Sucesso!", response.status, response.text);
      msgStatus.classList.remove("hidden");
      form.reset();
    }, function(error) {
      console.error("Erro:", error);
      alert("Erro ao enviar. Tente novamente.");
    });
  });