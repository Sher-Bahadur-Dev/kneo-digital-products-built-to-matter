/* ============================================
   KNEO Software Solutions - Testimonial Slider
   ============================================ */

class TestimonialSlider {
    constructor() {
        this.track = document.getElementById('testimonialTrack');
        this.dots = document.getElementById('sliderDots');
        this.prevBtn = document.getElementById('prevTestimonial');
        this.nextBtn = document.getElementById('nextTestimonial');
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000;

        if (!this.track) return;

        this.totalSlides = this.track.children.length;
        this.init();
    }

    init() {
        // Button events
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        // Dot events
        if (this.dots) {
            this.dots.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.addEventListener('click', () => this.goTo(i));
            });
        }

        // Start autoplay
        this.startAutoplay();

        // Pause on hover
        const slider = document.getElementById('testimonialSlider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.stopAutoplay());
            slider.addEventListener('mouseleave', () => this.startAutoplay());
        }

        // Touch/swipe support
        this.initTouch();
    }

    goTo(index) {
        this.currentIndex = index;
        this.update();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.update();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.update();
    }

    update() {
        if (!this.track) return;

        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;

        // Update dots
        if (this.dots) {
            this.dots.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === this.currentIndex);
            });
        }
    }

    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => this.next(), this.autoplayDelay);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }

    initTouch() {
        let startX = 0;
        let endX = 0;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        this.track.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        }, { passive: true });

        this.track.addEventListener('touchend', () => {
            const diff = startX - endX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) this.next();
                else this.prev();
            }
        });
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialSlider();
});