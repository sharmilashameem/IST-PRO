// --- Apple-style Scroll Reveal Animation ---
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Apply initial hidden state and observe elements
document.querySelectorAll('.glass-card, .skill-card, .timeline-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
});

// --- Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Dynamic Navbar Background on Scroll ---
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0, 0, 0, 0.9)";
        nav.style.borderBottom = "1px solid rgba(46, 16, 101, 0.5)"; // Deep purple glow
    } else {
        nav.style.background = "rgba(0, 0, 0, 0.8)";
        nav.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
    }
});
