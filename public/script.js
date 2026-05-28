/* ====================================================
   CHANEL SPRING 2027 - SCRIPT.JS
   Luxury Fashion Editorial Website
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
                // Add delay for staggered animation
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
    // PRODUCT CATEGORY TABS
    // ====================================================
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    const productCategories = document.querySelectorAll('.product-category');
    
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all buttons and categories
            tabButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            productCategories.forEach(function(cat) {
                cat.classList.remove('active');
            });
            
            // Add active class to clicked button and corresponding category
            this.classList.add('active');
            const targetCategory = document.getElementById('cat-' + category);
            if (targetCategory) {
                targetCategory.classList.add('active');
            }
        });
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
    // CIRCULAR PILLARS HOVER EFFECT
    // ====================================================
    
    const circularPillars = document.querySelectorAll('.circular-pillar');
    
    circularPillars.forEach(function(pillar) {
        pillar.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--color-gold)';
        });
        
        pillar.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(0, 0, 0, 0.05)';
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
    // KEYWORDS RIPPLE EFFECT
    // ====================================================
    
    const keywords = document.querySelectorAll('.keyword');
    
    keywords.forEach(function(keyword, index) {
        keyword.style.animationDelay = (index * 0.1) + 's';
    });
    
    // ====================================================
    // PRODUCT CARDS HOVER TILT EFFECT
    // ====================================================
    
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 50;
            const rotateY = (centerX - x) / 50;
            
            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ====================================================
    // MOODBOARD ITEMS PARALLAX EFFECT
    // ====================================================
    
    const moodItems = document.querySelectorAll('.mood-item');
    
    moodItems.forEach(function(item) {
        item.addEventListener('mousemove', function(e) {
            const rect = item.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const img = item.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.1) translate(' + ((x - 0.5) * 10) + 'px, ' + ((y - 0.5) * 10) + 'px)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const img = item.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
    
    // ====================================================
    // SCROLL PROGRESS INDICATOR (OPTIONAL)
    // ====================================================
    
    // Uncomment below to add a scroll progress bar at the top
    /*
    const progressBar = document.createElement('div');
    progressBar.style.cssText = 'position: fixed; top: 0; left: 0; height: 2px; background: var(--color-gold); z-index: 9999; transition: width 0.1s;';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    */
    
    // ====================================================
    // CONSOLE MESSAGE
    // ====================================================
    
    console.log('%cCHANEL Spring 2027', 'font-family: Georgia, serif; font-size: 24px; color: #c9a959;');
    console.log('%cTimeless Circular Luxury', 'font-family: Arial, sans-serif; font-size: 12px; color: #9a9a9a;');
    console.log('%cFIT SUNY Korea | Fashion Business Management', 'font-family: Arial, sans-serif; font-size: 10px; color: #666;');
    
});
