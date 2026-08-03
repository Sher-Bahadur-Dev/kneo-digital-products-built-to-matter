/* ============================================
   KNEO Software Solutions - Contact Form Validation
   ============================================ */

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fields = {
        name: {
            element: document.getElementById('name'),
            error: document.getElementById('nameError'),
            validate: (value) => {
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            }
        },
        email: {
            element: document.getElementById('email'),
            error: document.getElementById('emailError'),
            validate: (value) => {
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email';
                return '';
            }
        },
        phone: {
            element: document.getElementById('phone'),
            error: document.getElementById('phoneError'),
            validate: (value) => {
                if (!value.trim()) return ''; // Optional
                const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/;
                if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
                return '';
            }
        },
        subject: {
            element: document.getElementById('subject'),
            error: document.getElementById('subjectError'),
            validate: (value) => {
                if (!value.trim()) return 'Subject is required';
                if (value.trim().length < 3) return 'Subject must be at least 3 characters';
                return '';
            }
        },
        message: {
            element: document.getElementById('message'),
            error: document.getElementById('messageError'),
            validate: (value) => {
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                return '';
            }
        }
    };

    // Real-time validation
    Object.keys(fields).forEach(key => {
        const field = fields[key];
        if (!field.element) return;

        field.element.addEventListener('blur', () => {
            validateField(key);
        });

        field.element.addEventListener('input', () => {
            // Clear error on input
            if (field.element.parentElement.classList.contains('error')) {
                validateField(key);
            }
        });
    });

    function validateField(key) {
        const field = fields[key];
        if (!field.element || !field.error) return false;

        const errorMsg = field.validate(field.element.value);
        const parent = field.element.parentElement;

        if (errorMsg) {
            parent.classList.add('error');
            field.error.textContent = errorMsg;
            return false;
        } else {
            parent.classList.remove('error');
            field.error.textContent = '';
            return true;
        }
    }

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        Object.keys(fields).forEach(key => {
            if (!validateField(key)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                const successMsg = document.getElementById('formSuccess');
                if (successMsg) {
                    successMsg.classList.add('show');
                }

                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                setTimeout(() => {
                    if (successMsg) successMsg.classList.remove('show');
                }, 5000);
            }, 1500);
        } else {
            // Scroll to first error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

// Newsletter form
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        const email = input.value.trim();

        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            const btn = form.querySelector('button');
            btn.innerHTML = '✓';
            input.value = '';
            setTimeout(() => {
                btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
            }, 2000);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initNewsletterForm();
});