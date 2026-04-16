const skillsSection = document.querySelector('.skills-section');

window.addEventListener('scroll', () => {
    const sectionTop = skillsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
        skillsSection.classList.add('active');
    }
});

const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

items.forEach(item => {
    observer.observe(item);
});

const expContainer = document.querySelector(".timeline-exp");

experiencia.forEach(item => {
    expContainer.innerHTML += `
        <div class="timeline-item">
            <div class="timeline-dot"></div>

            <div class="timeline-content">
                <span class="date">${item.fecha}</span>
                <h4>${item.empresa}</h4>
                <span class="role">${item.rol}</span>
                <p>${item.descripcion}</p>
            </div>
        </div>
    `;
});

