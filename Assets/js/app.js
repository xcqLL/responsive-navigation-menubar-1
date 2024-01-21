document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('mouseenter', () => {
        gsap.to('.bar', { scaleX: 1.2, duration: 0.3, ease: 'power2.inOut' });
    });

    menuToggle.addEventListener('mouseleave', () => {
        gsap.to('.bar', { scaleX: 1, duration: 0.3, ease: 'power2.inOut' });
    });

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');

        if (navLinks.classList.contains('show')) {
            gsap.from('.nav-links li', { opacity: 0, duration: 0.5, y: -20, stagger: 0.2 });
        }
    });

    gsap.from('.logo', { opacity: 0, duration: 1, delay: 0.5, y: -50 });
    gsap.from('.menu-toggle', { opacity: 0, duration: 1, delay: 1, y: -50 });
});