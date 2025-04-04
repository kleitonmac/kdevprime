fetch('SUA_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: 'kleiton',
      mensagem: 'teste'
    })
  })
  