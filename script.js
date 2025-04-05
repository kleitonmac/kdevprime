(function() {
    emailjs.init("pTZyhJYaccnO1e2Wy"); // Troque pelo seu Public Key do EmailJS
  })();
  
  const form = document.getElementById("form-contato");
  const msgStatus = document.getElementById("msg-status");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nome = form.nome.value;
    const titulo = form.titulo.value;
    const mensagem = form.mensagem.value;
    const email = form.email.value;
  
    emailjs.send("service_hwj3yyi", "template_f9lfv7l", {
      nome: nome,
      titulo: titulo,
      mensagem: mensagem,
      email: email
    })
    .then(function(response) {
      console.log("Sucesso!", response.status, response.text);
      msgStatus.textContent = "Mensagem enviada com sucesso!";
      msgStatus.classList.remove("hidden");
      msgStatus.classList.add("text-green-600");
      form.reset();
    }, function(error) {
      console.error("Erro:", error);
      msgStatus.textContent = "Erro ao enviar. Tente novamente.";
      msgStatus.classList.remove("hidden");
      msgStatus.classList.add("text-red-600");
    });
  });