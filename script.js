const skillsSection = document.querySelector('.skills-section');

window.addEventListener('scroll', () => {
    const sectionTop = skillsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
        skillsSection.classList.add('active');
    }
});