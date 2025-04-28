// JavaScript para funcionalidade do formulário
document.addEventListener("DOMContentLoaded", function() {
    // Formulário de captura de e-mail
    const emailForm = document.getElementById("email-form");
    if (emailForm) {
        emailForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            <script>
document.getElementById('meuFormulario').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    nome: this.nome.value,
    email: this.email.value
  };
  
  fetch('https://script.google.com/macros/s/AKfycbyVX-IzVUO6cgyQozq6PoZ5q_ncmYdje8pTqy_mlC9-vWK3OUQHLqlsf3qj8kG4EESZ/exec', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    alert('Dados enviados com sucesso!');
    this.reset();
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Erro ao enviar os dados.');
  });
});
</script>

            
            // Aqui você normalmente enviaria os dados para um servidor
            // Como é apenas uma demonstração, mostraremos um alerta
            alert(`Obrigado ${name}! Seu e-mail ${email} foi registrado com sucesso.`);
            
            // Limpar o formulário
            emailForm.reset();
        });
    }
    
    // O código anterior que impedia o redirecionamento dos botões de compra foi removido.
    // Os links agora funcionarão diretamente através das tags <a> no HTML.
});
