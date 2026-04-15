// REVEAL SCROLL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");

            entry.target.querySelectorAll(".fill").forEach(bar => {
                bar.style.width = bar.classList[1].replace("w", "") + "%";
            });
        }
    });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));


// PARALLAX (APPLE STYLE)
window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const bg = document.querySelector(".hero-bg");
    bg.style.transform = `translateY(${scroll * 0.3}px)`;

    document.querySelectorAll(".parallax").forEach(el => {
        el.style.transform = `translateY(${scroll * 0.2}px)`;
        el.style.opacity = 1 - scroll / 500;
    });

});