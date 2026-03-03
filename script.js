// Initialize 3D Tilt Effect
VanillaTilt.init(document.querySelectorAll(".tilt-card, .profile-container"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

// Custom Cursor Movement
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Reveal Animations on Scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.glass-card');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0) scale(1)";
        }
    });
};

window.addEventListener('scroll', reveal);

// Initial state for reveal
document.querySelectorAll('.glass-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px) scale(0.9)";
    el.style.transition = "all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
});
