/* ====================================================
   CHANEL SPRING 2027 - SCRIPT.JS
   Korean Heritage × Modern Luxury
   ==================================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ====================================================
    // NAVIGATION
    // ====================================================
    
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Scroll effect for navigation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // ====================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ====================================================
    
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ====================================================
    // SECTION FADE-IN ON SCROLL
    // ====================================================
    
    const sections = document.querySelectorAll('.section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(function(section) {
        sectionObserver.observe(section);
    });
    
    // ====================================================
    // JOURNEY STAGES ANIMATION
    // ====================================================
    
    const journeyStages = document.querySelectorAll('.journey-stage');
    
    const journeyObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2
    });
    
    journeyStages.forEach(function(stage) {
        journeyObserver.observe(stage);
    });
    
    // ====================================================
    // CHART BAR ANIMATION
    // ====================================================
    
    const chartBars = document.querySelectorAll('.chart-bar');
    
    const chartObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const height = bar.getAttribute('data-height');
                const fill = bar.querySelector('.chart-bar-fill');
                if (fill && height) {
                    fill.style.height = height + '%';
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    chartBars.forEach(function(bar) {
        chartObserver.observe(bar);
    });
    
    // ====================================================
    // HERO ANIMATION ON LOAD
    // ====================================================
    
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
    
    // ====================================================
    // SUPPLY CHAIN TIER CARDS ANIMATION
    // ====================================================
    
    const tierCards = document.querySelectorAll('.tier-card');
    
    const tierObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2
    });
    
    tierCards.forEach(function(card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out ' + (index * 0.15) + 's, transform 0.6s ease-out ' + (index * 0.15) + 's';
        tierObserver.observe(card);
    });
    
    // ====================================================
    // PRODUCT COLLECTION - LOAD AND DISPLAY PRODUCTS
    // ====================================================
    
    const productsContainer = document.getElementById('products-container');
    const categoryButtons = document.querySelectorAll('.category-btn');
    let productsData = null;
    
    // Category descriptions and Korean heritage keywords
    const categoryInfo = {
        'Womenswear': {
            description: 'Elegant silhouettes reimagined through Korean heritage, blending timeless CHANEL craftsmanship with traditional hanbok elements.',
            keywords: ['Hanbok Wrap', 'Norigae Detail', 'Jeogori Silhouette']
        },
        'Menswear': {
            description: 'Contemporary menswear infused with Korean traditional elements, featuring refined tailoring and artisanal details.',
            keywords: ['Hanbok Inspired', 'Durumagi Coat', 'Traditional Knot']
        },
        'Activewear': {
            description: 'Performance luxury meets Korean heritage, with athletic pieces featuring traditional wrapping and closure techniques.',
            keywords: ['Jeogori Panels', 'Norigae Ribbon', 'Traditional Pattern']
        },
        'Swimwear': {
            description: 'Resort elegance with Korean lucky charm details and traditional motifs woven into modern swimwear silhouettes.',
            keywords: ['Lucky Charm', 'Traditional Pattern', 'Heritage Detail']
        },
        'Innerwear': {
            description: 'Intimate luxury inspired by hanbok seam lines and traditional Korean textile art, featuring delicate detailing.',
            keywords: ['Hanbok Seam', 'Maehwa Blossom', 'Hanji Texture']
        },
        'Accessories': {
            description: 'Statement pieces celebrating Korean craftsmanship, from binyeo-inspired hair pins to najeonchilgi-influenced designs.',
            keywords: ['Binyeo', 'Najeonchilgi', 'Traditional Knot']
        },
        'Jewelry': {
            description: 'Fine jewelry inspired by Korean royal heritage, featuring dancheong patterns and traditional motifs in precious metals.',
            keywords: ['Dancheong', 'Plum Blossom', 'Hanok Eave']
        },
        'Footwear': {
            description: 'Elegant footwear blending French sophistication with Korean-inspired floral details and norigae embellishments.',
            keywords: ['Norigae Tassel', 'Gomusin Shape', 'Dancheong Color']
        },
        'Beauty': {
            description: 'Beauty essentials housed in packaging inspired by Korean traditional lacquerware and moon jar ceramics.',
            keywords: ['Moon Jar', 'Najeonchilgi', 'Yeonjeok Bowl']
        },
        'Home Textile': {
            description: 'Luxurious home pieces featuring Korean traditional patterns and lucky charm details for refined living spaces.',
            keywords: ['Traditional Pattern', 'Lucky Charm', 'Heritage Motif']
        },
        'Kidswear Girls': {
            description: 'Playful luxury for girls, featuring hanbok-inspired silhouettes and whimsical cloud and flower appliqués.',
            keywords: ['Hanbok Patchwork', 'Cloud Motif', 'Tweed Flowers']
        },
        'Kidswear Boys': {
            description: 'Sophisticated boys\' wear with Korean heritage elements, from hanbok-inspired wraps to traditional embroidery.',
            keywords: ['Wrap Style', 'Traditional Trim', 'Heritage Embroidery']
        },
        'Pet': {
            description: 'Luxurious pet accessories inspired by Korean palace aesthetics and traditional hanok architecture.',
            keywords: ['Hanok Silhouette', 'Moon Jar Shape', 'Norigae Tassel']
        }
    };
    
    // Convert category name to key format
    function categoryToKey(category) {
        return category.toLowerCase().replace(/\s+/g, '-');
    }
    
    // Create product card HTML
    function createProductCard(product) {
        const categoryKey = categoryToKey(product.category);
        const info = categoryInfo[product.category] || { keywords: [] };
        const keyword = info.keywords[Math.floor(Math.random() * info.keywords.length)] || 'Korean Heritage';
        
        return `
            <div class="product-card">
                <div class="product-image">
                    <div class="image-placeholder">
                        <p>${product.itemName}</p>
                        <span>${product.imagePath}</span>
                    </div>
                </div>
                <div class="product-details">
                    <span class="product-heritage-tag">${keyword}</span>
                    <p class="product-style-number">${product.styleNumber}</p>
                    <h4 class="product-name">${product.itemName}</h4>
                    <p class="product-description">${product.description}</p>
                    <div class="product-meta">
                        <div class="product-meta-row">
                            <strong>Category</strong>
                            <span>${product.category}</span>
                        </div>
                        <div class="product-meta-row">
                            <strong>Classification</strong>
                            <span>${product.classification}</span>
                        </div>
                        <div class="product-meta-row">
                            <strong>Sizes</strong>
                            <span>${product.sizes}</span>
                        </div>
                        <div class="product-meta-row">
                            <strong>Fabric / Material</strong>
                            <span>${product.fabricMaterial}</span>
                        </div>
                        <div class="product-meta-row">
                            <strong>Color / Pattern</strong>
                            <span>${product.colorPattern}</span>
                        </div>
                        <div class="product-meta-row">
                            <strong>Order By</strong>
                            <span>${product.orderBy}</span>
                        </div>
                    </div>
                    <p class="product-price">${product.retailTicket}</p>
                </div>
            </div>
        `;
    }
    
    // Create category hero card
    function createCategoryHero(category, productCount) {
        const info = categoryInfo[category] || { 
            description: 'Spring 2027 Collection', 
            keywords: ['Korean Heritage'] 
        };
        
        return `
            <div class="category-hero">
                <div class="category-hero-content">
                    <h3 class="category-hero-title">${category}</h3>
                    <p class="category-hero-count">${productCount} Products</p>
                    <p class="category-hero-description">${info.description}</p>
                    <div class="category-hero-keywords">
                        ${info.keywords.map(k => `<span class="heritage-keyword">${k}</span>`).join('')}
                    </div>
                </div>
                <div class="category-hero-image">
                    <div class="image-placeholder">
                        <p>${category}</p>
                        <span>images/categories/${categoryToKey(category)}.jpg</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Display products for a category
    function displayCategory(category) {
        if (!productsData || !productsData.products) {
            productsContainer.innerHTML = '<p class="loading-error">Unable to load products. Please refresh the page.</p>';
            return;
        }
        
        // Filter products by category
        const categoryProducts = productsData.products.filter(function(p) {
            return p.category === category;
        });
        
        if (categoryProducts.length === 0) {
            productsContainer.innerHTML = '<p class="no-products">No products found in this category.</p>';
            return;
        }
        
        // Build the category display
        let html = '';
        
        // Category hero card
        html += createCategoryHero(category, categoryProducts.length);
        
        // Product grid
        html += '<div class="product-grid">';
        categoryProducts.forEach(function(product) {
            html += createProductCard(product);
        });
        html += '</div>';
        
        productsContainer.innerHTML = html;
        
        // Animate cards
        const cards = productsContainer.querySelectorAll('.product-card');
        cards.forEach(function(card, index) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(function() {
                card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }
    
    // Category button click handler
    categoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category from data attribute
            const categoryKey = this.getAttribute('data-category');
            
            // Convert key back to category name
            const categoryMap = {
                'womenswear': 'Womenswear',
                'menswear': 'Menswear',
                'activewear': 'Activewear',
                'swimwear': 'Swimwear',
                'innerwear': 'Innerwear',
                'accessories': 'Accessories',
                'jewelry': 'Jewelry',
                'footwear': 'Footwear',
                'beauty': 'Beauty',
                'home-textile': 'Home Textile',
                'kidswear-girls': 'Kidswear Girls',
                'kidswear-boys': 'Kidswear Boys',
                'pet': 'Pet'
            };
            
            const category = categoryMap[categoryKey] || categoryKey;
            displayCategory(category);
        });
    });
    
    // Load products from JSON
    function loadProducts() {
        productsContainer.innerHTML = '<p class="loading-text">Loading collection...</p>';
        
        fetch('./products.json')
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Failed to load products');
                }
                return response.json();
            })
            .then(function(data) {
                productsData = data;
                // Display Womenswear by default
                displayCategory('Womenswear');
            })
            .catch(function(error) {
                console.error('Error loading products:', error);
                productsContainer.innerHTML = `
                    <div class="loading-error">
                        <p>Unable to load products data.</p>
                        <p>Please ensure products.json is in the same directory as index.html</p>
                    </div>
                `;
            });
    }
    
    // Initialize products
    loadProducts();
    
    // ====================================================
    // CIRCULAR PILLARS HOVER EFFECT
    // ====================================================
    
    const circularPillars = document.querySelectorAll('.circular-pillar');
    
    circularPillars.forEach(function(pillar) {
        pillar.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--color-gold)';
        });
        
        pillar.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
    
    // ====================================================
    // STATS COUNTER ANIMATION
    // ====================================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                
                setTimeout(function() {
                    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 200);
                
                statsObserver.unobserve(el);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(function(stat) {
        statsObserver.observe(stat);
    });
    
    // ====================================================
    // TEAM CARDS STAGGERED ANIMATION
    // ====================================================
    
    const teamCards = document.querySelectorAll('.team-card');
    
    const teamObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    teamCards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        teamObserver.observe(card);
    });
    
    // ====================================================
    // TRACE BLOCKS ANIMATION
    // ====================================================
    
    const traceBlocks = document.querySelectorAll('.trace-block');
    
    const traceObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    traceBlocks.forEach(function(block) {
        traceObserver.observe(block);
    });
    
    // ====================================================
    // KEYWORDS RIPPLE EFFECT
    // ====================================================
    
    const keywords = document.querySelectorAll('.keyword');
    
    keywords.forEach(function(keyword, index) {
        keyword.style.animationDelay = (index * 0.1) + 's';
    });
    
    // ====================================================
    // CONSOLE MESSAGE
    // ====================================================
    
    console.log('%cCHANEL Spring 2027', 'font-family: Georgia, serif; font-size: 24px; color: #c9a959;');
    console.log('%cTimeless Circular Luxury', 'font-family: Arial, sans-serif; font-size: 12px; color: #9a9a9a;');
    console.log('%cKorean Heritage Reimagined', 'font-family: Arial, sans-serif; font-size: 12px; color: #9D202F;');
    console.log('%cFIT SUNY Korea | FM109', 'font-family: Arial, sans-serif; font-size: 10px; color: #666;');
    
});
