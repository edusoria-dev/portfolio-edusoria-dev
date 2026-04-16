// ANIMACIÓN BARRAS DE SKILLS
// Solo activa si la sección .skills-section existe en el HTML
const skillsSection = document.querySelector('.skills-section');

if (skillsSection) {
    window.addEventListener('scroll', () => {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            skillsSection.classList.add('active');
        }
    });
}

// ANIMACIÓN TIMELINE (fade-in al hacer scroll)
const timelineItems = document.querySelectorAll('.timeline-item');

if (timelineItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));
}
