// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Smooth scroll for navigation links (fallback for browsers that don't support scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Product card animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product cards
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Order button click tracking
document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Add a small loading state
        const originalText = this.textContent;
        this.textContent = 'Opening WhatsApp...';
        this.style.background = '#D4AF37';
        this.style.color = '#000';
        
        // Reset after a short delay (in case the user doesn't navigate)
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '#000';
            this.style.color = '#fff';
        }, 2000);
    });
});

// Image error handling
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // If image fails to load, show a placeholder
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMjUgMTI1SDc1Vjc1SDEyNVYxMjVaIiBmaWxsPSIjREREIi8+CjxwYXRoIGQ9Ik0yMjUgMTI1SDE3NVY3NUgyMjVWMTI1WiIgZmlsbD0iI0REQSIvPgo8cGF0aCBkPSJNMTI1IDIyNUg3NVYxNzVIMTI1VjIyNVoiIGZpbGw9IiNEREQiLz4KPHBhdGggZD0iTTIyNSAyMjVIMTc1VjE3NUgyMjVWMjI1WiIgZmlsbD0iI0REQSIvPgo8L3N2Zz4K';
        this.alt = 'Image not available';
    });
});

// Form validation (if contact form is added later)
function validateForm(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Loading animation removal when page is fully loaded
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Console message for developers
console.log('RK Clothing Store Website loaded successfully!');
console.log('Built with HTML, CSS, and JavaScript');
