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

// Background Music Control
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = musicToggle.querySelector('.music-icon');
const musicText = musicToggle.querySelector('.music-text');

// Set initial volume
bgMusic.volume = 0.3;

// Toggle music play/pause
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().then(() => {
            musicToggle.classList.add('playing');
            musicText.textContent = 'Pause Music';
            musicIcon.textContent = '🎶';
        }).catch(error => {
            console.log('Audio play failed:', error);
        });
    } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicText.textContent = 'Play Music';
        musicIcon.textContent = '🎵';
    }
});

// Handle music end (though it's looped)
bgMusic.addEventListener('ended', () => {
    bgMusic.play();
});

// Auto-play music when page loads (user interaction required)
document.addEventListener('click', function initAudio() {
    if (bgMusic.paused) {
        bgMusic.play().then(() => {
            musicToggle.classList.add('playing');
            musicText.textContent = 'Pause Music';
            musicIcon.textContent = '🎶';
        }).catch(error => {
            console.log('Auto-play prevented:', error);
        });
        document.removeEventListener('click', initAudio);
    }
}, { once: true });

// Amazon-style Product Interactions
document.addEventListener('DOMContentLoaded', () => {
    // View switching (Grid/List)
    const viewBtns = document.querySelectorAll('.view-btn');
    const productsGrid = document.querySelector('.products-grid');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            if (view === 'list') {
                productsGrid.classList.add('list-view');
            } else {
                productsGrid.classList.remove('list-view');
            }
        });
    });
    
    // Product image link clicks
    const productImageLinks = document.querySelectorAll('.product-image-link');
    productImageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = link.dataset.product;
            const card = link.closest('.amazon-card');
            const title = card.querySelector('.amazon-product-title').textContent;
            const price = card.querySelector('.amazon-price').textContent;
            const code = card.querySelector('.amazon-code').textContent;
            
            // Create detailed product modal
            createDetailedProductModal(productId, title, price, code);
        });
    });
    
    // Quick View functionality
    const quickViewBtns = document.querySelectorAll('.quick-view');
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = btn.dataset.product;
            const card = btn.closest('.amazon-card');
            const title = card.querySelector('.amazon-product-title').textContent;
            const price = card.querySelector('.amazon-price').textContent;
            const code = card.querySelector('.amazon-code').textContent;
            
            // Create detailed product modal
            createDetailedProductModal(productId, title, price, code);
        });
    });
    
    // Wishlist functionality
    const wishlistBtns = document.querySelectorAll('.add-to-wishlist');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.style.background = btn.style.background === 'red' ? '#ff9900' : 'red';
            btn.textContent = btn.textContent === '♥' ? '♥' : '♥';
            
            // Show notification
            showNotification('Added to wishlist!');
        });
    });
    
    // Sort functionality
    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', (e) => {
            const sortBy = e.target.value;
            sortProducts(sortBy);
        });
    }
});

// Quick View Modal
function createQuickViewModal(title, price, code) {
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${title}</h3>
            <p class="modal-price">¥${price}</p>
            <p class="modal-code">Product Code: ${code}</p>
            <a href="https://wa.me/9313057780?text=I%20want%20to%20order%20Product%20Code%20${code}" 
               class="modal-order-btn" target="_blank">
                <span>🛒</span> Order Now
            </a>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Detailed Product Modal
function createDetailedProductModal(productId, title, price, code) {
    const productDetails = getProductDetails(productId);
    
    const modal = document.createElement('div');
    modal.className = 'product-detail-modal';
    modal.innerHTML = `
        <div class="modal-content product-detail-content">
            <span class="close-modal">&times;</span>
            <div class="product-detail-grid">
                <div class="product-detail-image">
                    <img src="images/product${productId.split('-')[1]}.jpg" alt="${title}">
                </div>
                <div class="product-detail-info">
                    <h2>${title}</h2>
                    <div class="product-detail-rating">
                        <span class="stars">${productDetails.rating}</span>
                        <span class="rating-text">${productDetails.ratingText}</span>
                    </div>
                    <div class="product-detail-price">
                        <span class="current-price">¥${price}</span>
                        <span class="original-price">¥${productDetails.originalPrice}</span>
                        <span class="discount">${productDetails.discount}</span>
                    </div>
                    <p class="product-description">${productDetails.description}</p>
                    <div class="product-features">
                        <h4>Features:</h4>
                        <ul>
                            ${productDetails.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="product-specs">
                        <div class="spec-item">
                            <strong>Material:</strong> ${productDetails.material}
                        </div>
                        <div class="spec-item">
                            <strong>Care Instructions:</strong> ${productDetails.care}
                        </div>
                        <div class="spec-item">
                            <strong>Sizes Available:</strong> ${productDetails.sizes.join(', ')}
                        </div>
                        <div class="spec-item">
                            <strong>Stock Status:</strong> <span class="in-stock">In Stock</span>
                        </div>
                    </div>
                    <div class="product-detail-actions">
                        <a href="https://wa.me/9313057780?text=I%20want%20to%20order%20Product%20Code%20${code.toUpperCase()}" 
                           class="modal-order-btn" target="_blank">
                            <span>ð</span> Order Now via WhatsApp
                        </a>
                        <button class="add-to-cart-btn">
                            <span>+</span> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Add to cart functionality
    modal.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        showNotification('Added to cart!');
        modal.remove();
    });
}

// Get product details based on product ID
function getProductDetails(productId) {
    const details = {
        'ts-101': {
            rating: 'âââââ',
            ratingText: '4.5 out of 5 stars (128 reviews)',
            originalPrice: '1299',
            discount: '31% off',
            description: 'Premium quality classic t-shirt made from 100% organic cotton. Features a comfortable fit and durable fabric that lasts wash after wash.',
            features: ['100% Organic Cotton', 'Comfortable Fit', 'Machine Washable', 'Available in 5 Colors'],
            material: 'Organic Cotton',
            care: 'Machine wash cold, tumble dry low',
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        'hd-202': {
            rating: 'âââââ',
            ratingText: '4.7 out of 5 stars (89 reviews)',
            originalPrice: '2199',
            discount: '27% off',
            description: 'Luxury hoodie with premium fleece lining and modern design. Perfect for casual outings and comfortable lounging.',
            features: ['Premium Fleece', 'Kangaroo Pocket', 'Adjustable Hood', 'Ribbed Cuffs'],
            material: 'Premium Fleece',
            care: 'Machine wash cold, hang dry',
            sizes: ['S', 'M', 'L', 'XL']
        },
        'dj-303': {
            rating: 'âââââ',
            ratingText: '4.2 out of 5 stars (156 reviews)',
            originalPrice: '2999',
            discount: '23% off',
            description: 'Classic denim jeans with modern fit and premium quality denim. Features durable stitching and comfortable stretch.',
            features: ['Premium Denim', 'Stretch Fabric', 'Classic Fit', 'Durable Stitching'],
            material: 'Denim with Stretch',
            care: 'Machine wash cold, tumble dry medium',
            sizes: ['28', '30', '32', '34', '36']
        },
        'cs-404': {
            rating: 'âââââ',
            ratingText: '4.6 out of 5 stars (203 reviews)',
            originalPrice: '1799',
            discount: '33% off',
            description: 'Versatile casual shirt perfect for both office and casual occasions. Made from breathable fabric with modern cut.',
            features: ['Breathable Fabric', 'Modern Cut', 'Button-Down Collar', 'Easy Iron'],
            material: 'Cotton Blend',
            care: 'Machine wash warm, iron medium',
            sizes: ['S', 'M', 'L', 'XL']
        },
        'sj-505': {
            rating: 'âââââ',
            ratingText: '4.8 out of 5 stars (167 reviews)',
            originalPrice: '2599',
            discount: '27% off',
            description: 'High-performance sports jacket designed for active lifestyle. Features moisture-wicking fabric and ergonomic design.',
            features: ['Moisture-Wicking', 'Lightweight', 'Zippered Pockets', 'Reflective Details'],
            material: 'Performance Fabric',
            care: 'Machine wash cold, hang dry',
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        'fp-606': {
            rating: 'âââââ',
            ratingText: '4.1 out of 5 stars (94 reviews)',
            originalPrice: '1999',
            discount: '25% off',
            description: 'Professional formal pants perfect for business meetings and formal events. Features wrinkle-resistant fabric.',
            features: ['Wrinkle-Resistant', 'Classic Fit', 'Belt Loops', 'Pleated Design'],
            material: 'Wool Blend',
            care: 'Dry clean recommended',
            sizes: ['30', '32', '34', '36', '38']
        }
    };
    
    return details[productId] || details['ts-101'];
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Sort products
function sortProducts(sortBy) {
    const grid = document.querySelector('.products-grid');
    const cards = Array.from(grid.querySelectorAll('.amazon-card'));
    
    cards.sort((a, b) => {
        switch(sortBy) {
            case 'Price: Low to High':
                return parseFloat(a.querySelector('.amazon-price').textContent) - 
                       parseFloat(b.querySelector('.amazon-price').textContent);
            case 'Price: High to Low':
                return parseFloat(b.querySelector('.amazon-price').textContent) - 
                       parseFloat(a.querySelector('.amazon-price').textContent);
            case 'Customer Rating':
                const ratingA = a.querySelector('.amazon-rating-count').textContent;
                const ratingB = b.querySelector('.amazon-rating-count').textContent;
                return parseInt(ratingB) - parseInt(ratingA);
            default:
                return 0;
        }
    });
    
    // Re-append sorted cards
    cards.forEach(card => grid.appendChild(card));
}

// Console message for developers
console.log('RK Clothing Store Website loaded successfully!');
console.log('Built with HTML, CSS, and JavaScript');
console.log('Background music feature added');
console.log('Amazon-style product display implemented');
