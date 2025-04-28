// JavaScript para funcionalidade do formulário
document.addEventListener("DOMContentLoaded", function() {
    // Formulário de captura de e-mail
    const emailForm = document.getElementById("email-form");
    if (emailForm) {
        emailForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            
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
