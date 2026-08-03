/* ============================================
   KNEO Software Solutions - Reveal Animations
   ============================================ */

const revealElementsSelector = [
    '.reveal',
    '.reveal-left',
    '.reveal-right',
    '.reveal-zoom',
    '.slide-in-up',
    '.slide-in-left',
    '.slide-in-right',
    '.zoom-in'
].join(', ');

function revealOnScroll() {
    const elements = document.querySelectorAll(revealElementsSelector);
    if (!elements.length) return;

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(el => {
        if (el.classList.contains('visible')) return;
        observer.observe(el);
    });
}

function initRevealAnimations() {
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRevealAnimations);
} else {
    initRevealAnimations();
}
