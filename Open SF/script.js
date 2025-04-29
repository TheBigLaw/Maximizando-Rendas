// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// CTA button alert
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Entre em contato conosco para mais informações!');
});
