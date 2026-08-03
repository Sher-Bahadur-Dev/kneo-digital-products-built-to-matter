/* ============================================
   KNEO Software Solutions - Main JavaScript
   ============================================ */

// ========== DATA ==========

// Services data
const servicesData = [
    { icon: '🌐', title: 'Website Development', desc: 'Custom, responsive websites built with modern technologies for optimal performance and user experience.' },
    { icon: '💻', title: 'Software Development', desc: 'Enterprise-grade software solutions tailored to your business needs with scalable architecture.' },
    { icon: '📱', title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications for iOS and Android that users love.' },
    { icon: '🤖', title: 'AI Solutions', desc: 'Intelligent AI and machine learning solutions that automate and enhance your business.' },
    { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and migration services on AWS, Azure, and GCP.' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces designed with user experience at the forefront.' },
    { icon: '📈', title: 'Digital Marketing', desc: 'Data-driven marketing strategies to grow your online presence and reach.' },
    { icon: '✨', title: 'Brand Identity', desc: 'Memorable brand identities that tell your story and connect with your audience.' },
    { icon: '🔒', title: 'Cyber Security', desc: 'Comprehensive security solutions to protect your digital assets and data.' },
    { icon: '⚙️', title: 'Business Automation', desc: 'Streamline operations with intelligent automation and workflow optimization.' }
];

// Technology stack
const techData = [
    { name: 'HTML5', icon: 'H5' },
    { name: 'CSS3', icon: 'C3' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'PHP', icon: 'PHP' },
    { name: 'Laravel', icon: 'L' },
    { name: 'React', icon: 'R' },
    { name: 'Node.js', icon: 'N' },
    { name: 'Python', icon: 'Py' },
    { name: 'Flutter', icon: 'F' },
    { name: 'MySQL', icon: 'My' },
    { name: 'MongoDB', icon: 'Mg' },
    { name: 'Git', icon: 'G' },
    { name: 'GitHub', icon: 'GH' },
    { name: 'AWS', icon: 'AW' },
    { name: 'Docker', icon: 'D' }
];

// Portfolio projects
const portfolioData = [
    { title: 'FinTech Dashboard', desc: 'Real-time financial analytics platform for enterprise clients.', category: 'web', tags: ['React', 'Node.js', 'AWS'], icon: '💹' },
    { title: 'HealthTrack App', desc: 'Comprehensive health and fitness tracking mobile application.', category: 'mobile', tags: ['Flutter', 'Firebase'], icon: '❤️' },
    { title: 'AI Content Generator', desc: 'GPT-powered content creation tool for marketers.', category: 'ai', tags: ['Python', 'OpenAI'], icon: '🧠' },
    { title: 'Cloud Storage Pro', desc: 'Enterprise cloud storage solution with advanced security.', category: 'cloud', tags: ['AWS', 'Docker'], icon: '☁️' },
    { title: 'E-commerce Platform', desc: 'Scalable multi-vendor e-commerce marketplace.', category: 'web', tags: ['Laravel', 'Vue'], icon: '🛍️' },
    { title: 'Smart Home App', desc: 'IoT control application for smart home devices.', category: 'mobile', tags: ['React Native', 'IoT'], icon: '🏠' },
    { title: 'Predictive Analytics', desc: 'Machine learning platform for business forecasting.', category: 'ai', tags: ['Python', 'TensorFlow'], icon: '📊' },
    { title: 'DevOps Pipeline', desc: 'Automated CI/CD pipeline for enterprise deployments.', category: 'cloud', tags: ['Kubernetes', 'Jenkins'], icon: '🚀' }
];

// Testimonials
const testimonialsData = [
    { name: 'Sarah Johnson', company: 'CEO, TechStart Inc.', text: 'KNEO delivered an exceptional product that exceeded our expectations. Their team is professional, responsive, and truly understands our vision. Highly recommended!', rating: 5, initials: 'SJ' },
    { name: 'Michael Chen', company: 'CTO, InnovateCo', text: 'Working with KNEO was a game-changer for our business. They built a scalable platform that handles millions of users seamlessly. Outstanding technical expertise.', rating: 5, initials: 'MC' },
    { name: 'Emily Rodriguez', company: 'Founder, GrowthLab', text: 'The attention to detail and quality of work from KNEO is unmatched. They transformed our idea into a beautiful, functional product. A true partner in every sense.', rating: 5, initials: 'ER' },
    { name: 'David Thompson', company: 'Director, Enterprise Solutions', text: 'KNEO\'s team delivered on time, on budget, and with exceptional quality. Their communication and project management are top-notch. Will definitely work with them again.', rating: 5, initials: 'DT' }
];

// Pricing plans
const pricingData = [
    {
        name: 'Starter',
        desc: 'Perfect for small businesses and startups',
        price: '$999',
        period: '/project',
        features: ['Up to 5 pages', 'Responsive design', 'Basic SEO', 'Contact form', '1 month support', 'SSL certificate'],
        popular: false
    },
    {
        name: 'Business',
        desc: 'Ideal for growing businesses',
        price: '$2,999',
        period: '/project',
        features: ['Up to 20 pages', 'Custom design', 'Advanced SEO', 'CMS integration', 'E-commerce ready', '6 months support', 'Analytics setup', 'Priority support'],
        popular: true
    },
    {
        name: 'Enterprise',
        desc: 'For large-scale applications',
        price: 'Custom',
        period: '',
        features: ['Unlimited pages', 'Custom architecture', 'Full SEO suite', 'API integrations', 'Dedicated team', '24/7 support', 'SLA guarantee', 'Training included', 'Ongoing maintenance'],
        popular: false
    }
];

// Blog posts
const blogData = [
    { title: 'The Future of AI in Software Development', category: 'AI', date: 'Aug 01, 2026', excerpt: 'Explore how artificial intelligence is revolutionizing the way we build software and what it means for developers.', icon: '🤖' },
    { title: 'Building Scalable Cloud Architectures', category: 'Cloud', date: 'Jul 28, 2026', excerpt: 'Best practices for designing cloud infrastructure that scales with your business needs.', icon: '☁️' },
    { title: 'Mobile App Trends in 2026', category: 'Mobile', date: 'Jul 25, 2026', excerpt: 'The latest trends shaping mobile app development and user experience this year.', icon: '📱' },
    { title: 'Cybersecurity Best Practices', category: 'Security', date: 'Jul 20, 2026', excerpt: 'Essential security measures every business should implement to protect their digital assets.', icon: '🔒' },
    { title: 'UI/UX Design Principles', category: 'Design', date: 'Jul 15, 2026', excerpt: 'Fundamental design principles that create memorable user experiences.', icon: '🎨' },
    { title: 'DevOps: A Complete Guide', category: 'DevOps', date: 'Jul 10, 2026', excerpt: 'Everything you need to know about implementing DevOps in your organization.', icon: '⚙️' }
];

// Team members
const teamData = [
    { name: 'Alex Morgan', role: 'CEO & Founder', bio: 'Visionary leader with 15+ years in tech.', initials: 'AM' },
    { name: 'Jessica Lee', role: 'CTO', bio: 'Expert in cloud architecture and AI.', initials: 'JL' },
    { name: 'Marcus Chen', role: 'Lead Developer', bio: 'Full-stack wizard, open source contributor.', initials: 'MC' },
    { name: 'Priya Patel', role: 'Design Director', bio: 'Award-winning UX designer.', initials: 'PP' }
];

// Jobs
const jobsData = [
    { title: 'Senior Frontend Developer', location: 'Remote', type: 'Full-time', dept: 'Engineering' },
    { title: 'Backend Engineer (Node.js)', location: 'San Francisco', type: 'Full-time', dept: 'Engineering' },
    { title: 'UI/UX Designer', location: 'Remote', type: 'Full-time', dept: 'Design' },
    { title: 'Product Manager', location: 'Hybrid', type: 'Full-time', dept: 'Product' },
    { title: 'DevOps Engineer', location: 'Remote', type: 'Full-time', dept: 'Infrastructure' }
];

// FAQ
const faqData = [
    { q: 'How long does a typical project take?', a: 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our discovery phase.' },
    { q: 'What technologies do you use?', a: 'We work with modern technologies including React, Node.js, Python, Laravel, Flutter, AWS, and more. We choose the best stack based on your project requirements.' },
    { q: 'Do you provide ongoing support?', a: 'Yes! All our plans include post-launch support. We also offer dedicated maintenance packages for long-term partnership.' },
    { q: 'What is your pricing model?', a: 'We offer both fixed-price and time-and-materials models. During our initial consultation, we\'ll recommend the best approach for your project.' },
    { q: 'Can you work with our existing team?', a: 'Absolutely. We offer team augmentation services and can seamlessly integrate with your existing development team.' }
];

// ========== LOADER ==========
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1500);
});

// ========== NAVBAR ==========
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// Mobile menu toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ========== BACK TO TOP ==========
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== RENDER SERVICES ==========
function renderServices(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const items = limit ? servicesData.slice(0, limit) : servicesData;
    container.innerHTML = items.map((s, i) => `
        <div class="service-card reveal" style="transition-delay: ${i * 0.05}s">
            <div class="service-icon">${s.icon}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
        </div>
    `).join('');
}

// ========== RENDER TECH ==========
function renderTech(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = techData.map((t, i) => `
        <div class="tech-item reveal" style="transition-delay: ${i * 0.03}s">
            <div class="tech-icon">${t.icon}</div>
            <span>${t.name}</span>
        </div>
    `).join('');
}

// ========== RENDER PORTFOLIO ==========
function renderPortfolio(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const items = limit ? portfolioData.slice(0, limit) : portfolioData;
    container.innerHTML = items.map((p, i) => `
        <div class="portfolio-card reveal" data-category="${p.category}" style="transition-delay: ${i * 0.05}s">
            <div class="portfolio-image">${p.icon}</div>
            <div class="portfolio-content">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="portfolio-tags">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div class="portfolio-actions">
                    <a href="#" onclick="event.preventDefault()">Live Demo →</a>
                    <a href="#" onclick="event.preventDefault()">GitHub →</a>
                </div>
            </div>
        </div>
    `).join('');
}

// ========== RENDER TESTIMONIALS ==========
function renderTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const dots = document.getElementById('sliderDots');
    if (!track) return;

    track.innerHTML = testimonialsData.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-content">
                <div class="testimonial-stars">${'★'.repeat(t.rating)}</div>
                <p class="testimonial-text">"${t.text}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">${t.initials}</div>
                    <div class="author-info">
                        <h4>${t.name}</h4>
                        <p>${t.company}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    if (dots) {
        dots.innerHTML = testimonialsData.map((_, i) =>
            `<div class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
        ).join('');
    }
}

// ========== RENDER PRICING ==========
function renderPricing(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = pricingData.map((p, i) => `
        <div class="pricing-card reveal ${p.popular ? 'popular' : ''}" style="transition-delay: ${i * 0.1}s">
            ${p.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
            <h3 class="pricing-name">${p.name}</h3>
            <p class="pricing-desc">${p.desc}</p>
            <div class="pricing-price">
                <span class="price">${p.price}</span>
                <span class="price-period">${p.period}</span>
            </div>
            <ul class="pricing-features">
                ${p.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <a href="contact.html" class="btn ${p.popular ? 'btn-primary' : 'btn-outline'} btn-full">Get Started</a>
        </div>
    `).join('');
}

// ========== RENDER BLOG ==========
function renderBlog(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const items = limit ? blogData.slice(0, limit) : blogData;
    container.innerHTML = items.map((b, i) => `
        <article class="blog-card reveal" style="transition-delay: ${i * 0.05}s">
            <div class="blog-image">${b.icon}</div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-category">${b.category}</span>
                    <span>${b.date}</span>
                </div>
                <h3>${b.title}</h3>
                <p>${b.excerpt}</p>
                <a href="#" class="read-more" onclick="event.preventDefault()">Read More →</a>
            </div>
        </article>
    `).join('');
}

// ========== RENDER TEAM ==========
function renderTeam() {
    const container = document.getElementById('teamGrid');
    if (!container) return;

    container.innerHTML = teamData.map((t, i) => `
        <div class="team-card reveal" style="transition-delay: ${i * 0.1}s">
            <div class="team-avatar">${t.initials}</div>
            <h4>${t.name}</h4>
            <p class="team-role">${t.role}</p>
            <p class="team-bio">${t.bio}</p>
        </div>
    `).join('');
}

// ========== RENDER JOBS ==========
function renderJobs() {
    const container = document.getElementById('jobsList');
    if (!container) return;

    container.innerHTML = jobsData.map((j, i) => `
        <div class="job-card reveal" style="transition-delay: ${i * 0.05}s">
            <div class="job-info">
                <h3>${j.title}</h3>
                <div class="job-meta">
                    <span>📍 ${j.location}</span>
                    <span>💼 ${j.type}</span>
                    <span>🏢 ${j.dept}</span>
                </div>
            </div>
            <a href="contact.html" class="btn btn-outline">Apply Now</a>
        </div>
    `).join('');
}

// ========== RENDER FAQ ==========
function renderFAQ() {
    const container = document.getElementById('faqList');
    if (!container) return;

    container.innerHTML = faqData.map((f, i) => `
        <div class="faq-item reveal" style="transition-delay: ${i * 0.05}s">
            <div class="faq-question">
                <span>${f.q}</span>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner">${f.a}</div>
            </div>
        </div>
    `).join('');

    // FAQ accordion
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = '0';
            });

            // Open clicked if wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// ========== PARTICLES ==========
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    // Render components based on page
    renderServices('servicesGrid', 6);
    renderServices('servicesGridFull');
    renderTech('techGrid');
    renderPortfolio('portfolioGrid', 6);
    renderPortfolio('portfolioGridFull');
    renderTestimonials();
    renderPricing('pricingGrid');
    renderPricing('pricingGridFull');
    renderBlog('blogGrid', 3);
    renderBlog('blogGridFull');
    renderTeam();
    renderJobs();
    renderFAQ();
    createParticles();
});