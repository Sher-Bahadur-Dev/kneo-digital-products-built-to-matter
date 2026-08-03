/* ============================================
   KNEO Software Solutions - Portfolio Filter & Modal
   ============================================ */

function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = '';
                    card.style.animation = 'zoomIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initPortfolioModal() {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const cards = document.querySelectorAll('.portfolio-card');

    if (!modal) return;

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking a link
            if (e.target.tagName === 'A') return;

            const title = card.querySelector('h3').textContent;
            const desc = card.querySelector('p').textContent;
            const tags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent);
            const icon = card.querySelector('.portfolio-image').textContent;

            modalBody.innerHTML = `
                <div style="height: 200px; background: var(--gradient); border-radius: var(--radius); display: flex; align-items: center; justify-content: center; font-size: 5rem; margin-bottom: 24px;">
                    ${icon}
                </div>
                <h2 style="font-size: 2rem; margin-bottom: 12px;">${title}</h2>
                <p style="color: var(--gray); font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">${desc}</p>
                <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
                    ${tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                    <a href="#" class="btn btn-primary" onclick="event.preventDefault()">Live Demo</a>
                    <a href="#" class="btn btn-outline" onclick="event.preventDefault()">View Code</a>
                </div>
            `;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Delay initialization to wait for portfolio render
    setTimeout(() => {
        initPortfolioFilter();
        initPortfolioModal();
    }, 100);
});