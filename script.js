// Clothing data with images and pricing
const clothingData = [
    {
        id: 1,
        image: 'img/RK 0021.jpg',
        title: 'Premium Collection Item 1',
        features: [
            'High-quality fabric material',
            'Comfortable and breathable',
            'Modern stylish design',
            'Durable stitching',
            'Available in multiple sizes'
        ],
        pricing: {
            'S': 479,
            'M': 499,
            'L': 479,
            'XL': 509,
            'XXL': 519,
            '3XL': 529,
            '4XL': 539
        }
    },
    {
        id: 2,
        image: 'img/RK 0022.jpg',
        title: 'Premium Collection Item 2',
        features: [
            'Premium cotton blend',
            'Perfect fit for all body types',
            'Trendy and fashionable',
            'Easy to maintain',
            'Long-lasting colors'
        ],
        pricing: {
            'S': 479,
            'M': 499,
            'L': 479,
            'XL': 509,
            'XXL': 519,
            '3XL': 529,
            '4XL': 539
        }
    },
    {
        id: 3,
        image: 'img/RK 0023.jpg',
        title: 'Premium Collection Item 3',
        features: [
            'Soft and comfortable fabric',
            'Elegant design patterns',
            'Perfect for all occasions',
            'Skin-friendly material',
            'Available in vibrant colors'
        ],
        pricing: {
            'S': 479,
            'M': 499,
            'L': 479,
            'XL': 509,
            'XXL': 519,
            '3XL': 529,
            '4XL': 539
        }
    },
    {
        id: 4,
        image: 'img/RK 0024.jpg',
        title: 'Premium Collection Item 4',
        features: [
            'Designer quality fabric',
            'Contemporary style',
            'Perfect for casual and formal wear',
            'Resistant to fading',
            'Comfortable all-day wear'
        ],
        pricing: {
            'S': 479,
            'M': 499,
            'L': 479,
            'XL': 509,
            'XXL': 519,
            '3XL': 529,
            '4XL': 539
        }
    },
    {
        id: 5,
        image: 'img/RK 0025.jpg',
        title: 'Premium Collection Item 5',
        features: [
            'Luxury fabric quality',
            'Sophisticated design',
            'Perfect gift option',
            'Premium finish',
            'Exclusive collection piece'
        ],
        pricing: {
            'S': 479,
            'M': 499,
            'L': 479,
            'XL': 509,
            'XXL': 519,
            '3XL': 529,
            '4XL': 539
        }
    }
];

// Function to generate size pricing HTML
function generateSizePricing(pricing) {
    let sizeHTML = '<div class="size-grid">';
    
    for (const [size, price] of Object.entries(pricing)) {
        sizeHTML += `
            <div class="size-item">
                <div class="size-label">${size}</div>
                <div class="size-price price-tag">â¹${price}</div>
            </div>
        `;
    }
    
    sizeHTML += '</div>';
    return sizeHTML;
}

// Function to generate features HTML
function generateFeatures(features) {
    let featuresHTML = '<ul class="feature-list">';
    features.forEach(feature => {
        featuresHTML += `<li>${feature}</li>`;
    });
    featuresHTML += '</ul>';
    return featuresHTML;
}

// Function to create clothing item card
function createClothingItem(item) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="clothing-item">
                <div class="overflow-hidden">
                    <img src="${item.image}" alt="${item.title}" class="clothing-image" 
                         onerror="this.src='https://via.placeholder.com/400x400?text=Image+Not+Found'">
                </div>
                <div class="clothing-details">
                    <h3 class="clothing-title">${item.title}</h3>
                    <div class="clothing-features">
                        ${generateFeatures(item.features)}
                    </div>
                    <div class="size-pricing">
                        <h4 class="size-title">Available Sizes & Pricing</h4>
                        ${generateSizePricing(item.pricing)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to initialize the clothing showcase
function initializeClothingShowcase() {
    const container = document.getElementById('clothingItems');
    
    if (!container) {
        console.error('Clothing items container not found');
        return;
    }
    
    let htmlContent = '';
    clothingData.forEach(item => {
        htmlContent += createClothingItem(item);
    });
    
    container.innerHTML = htmlContent;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeClothingShowcase();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click animation to size items
    setTimeout(() => {
        const sizeItems = document.querySelectorAll('.size-item');
        sizeItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove previous selections
                sizeItems.forEach(i => i.style.background = 'white');
                // Highlight selected size
                this.style.background = '#007bff';
                this.style.color = 'white';
            });
        });
    }, 100);
});
