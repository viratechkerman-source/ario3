// Global variables
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    startSlideshow();
    initializeScrollAnimations();
    initializeProductFilter();
    initializeContactForm();
    initializeNavigation();
});

// Initialize App
function initializeApp() {
    // Add loading animation
    setTimeout(() => {
        const loading = document.querySelector('.loading');
        if (loading) {
            loading.classList.add('hide');
        }
    }, 1000);

    // Initialize back to top button
    initializeBackToTop();
    
    // Initialize smooth scrolling
    initializeSmoothScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
}

// Slideshow Functions
function showSlide(n) {
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function currentSlideFunc(n) {
    currentSlide = n - 1;
    showSlide(currentSlide);
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

// Add event listeners to slider controls
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    if (nextBtn) nextBtn.addEventListener('click', () => {
        stopSlideshow();
        nextSlide();
        startSlideshow();
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        stopSlideshow();
        previousSlide();
        startSlideshow();
    });
    
    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideshow();
            currentSlideFunc(index + 1);
            startSlideshow();
        });
    });
});

// Navigation Functions
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth Scroll
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    // Add scroll animation class to elements
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .product-card, .service-detail, .about-text, .contact-form, .contact-info'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Product Filter
function initializeProductFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.display = 'block';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Show success message (simulate form submission)
            showNotification('پیام شما با موفقیت ارسال شد!', 'success');
            
            // Reset form
            this.reset();
        });
    }
}

// Back to Top Button
function initializeBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Handle Scroll Events
function handleScroll() {
    const backToTop = document.getElementById('backToTop');
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        if (backToTop) backToTop.classList.add('show');
    } else {
        if (backToTop) backToTop.classList.remove('show');
    }
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(30px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.05)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(76, 205, 196, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(20px);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        max-width: 350px;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 4000);
}

// 3D Animation Effects
function init3DEffects() {
    // Parallax effect for floating shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape-3d');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px) rotateY(${scrolled * 0.1}deg)`;
        });
    });

    // Mouse move effect for cards
    document.querySelectorAll('.glass-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Initialize 3D effects after DOM load
document.addEventListener('DOMContentLoaded', init3DEffects);

// Magnetic Button Effect
document.querySelectorAll('.cta-btn, .product-btn, .submit-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
    });
});

// Statistics Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.innerText.replace(/[^0-9]/g, ''));
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.innerText = target + (counter.innerText.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                counter.innerText = Math.ceil(current) + (counter.innerText.includes('+') ? '+' : '');
            }
        }, 50);
    });
}

// Trigger counter animation when hero section is visible
const heroSection = document.querySelector('.hero');
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(animateCounters, 1000);
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (heroSection) {
    heroObserver.observe(heroSection);
}

// Particle Animation Background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
            opacity: ${Math.random() * 0.5 + 0.2};
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation CSS
const particleCSS = `
@keyframes particleFloat {
    0% {
        transform: translateY(100vh) rotate(0deg);
    }
    100% {
        transform: translateY(-100px) rotate(360deg);
    }
}
`;

const style = document.createElement('style');
style.textContent = particleCSS;
document.head.appendChild(style);

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Voice Commands (Persian)
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = 'fa-IR';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    // Voice commands mapping
    const voiceCommands = {
        'خانه': '#home',
        'درباره ما': '#about', 
        'محصولات': '#products',
        'خدمات': '#services',
        'تماس': '#contact',
        'برو بالا': 'top'
    };
    
    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.trim();
        console.log('Voice command:', command);
        
        if (voiceCommands[command]) {
            if (voiceCommands[command] === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                document.querySelector(voiceCommands[command])?.scrollIntoView({ behavior: 'smooth' });
            }
            showNotification(`دستور "${command}" اجرا شد`, 'success');
        }
    };
    
    // Add voice control button
    const voiceBtn = document.createElement('button');
    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    voiceBtn.className = 'voice-btn glass-card';
    voiceBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 90px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    voiceBtn.addEventListener('click', () => {
        recognition.start();
        voiceBtn.style.background = 'linear-gradient(45deg, #ff4757, #2ed573)';
        setTimeout(() => {
            voiceBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
        }, 3000);
    });
    
    document.body.appendChild(voiceBtn);
}

// Theme Switcher
function initializeThemeSwitcher() {
    const themes = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    
    let currentTheme = 0;
    
    const themeBtn = document.createElement('button');
    themeBtn.innerHTML = '<i class="fas fa-palette"></i>';
    themeBtn.className = 'theme-btn glass-card';
    themeBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 150px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    themeBtn.addEventListener('click', () => {
        currentTheme = (currentTheme + 1) % themes.length;
        document.body.style.background = themes[currentTheme];
        
        // Update section backgrounds
        document.querySelectorAll('section').forEach((section, index) => {
            if (index % 2 === 0) {
                section.style.background = themes[currentTheme];
            } else {
                section.style.background = themes[(currentTheme + 1) % themes.length];
            }
        });
        
        showNotification('تم تغییر کرد!', 'success');
    });
    
    document.body.appendChild(themeBtn);
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', initializeThemeSwitcher);

// Product Detail Modal
function createProductModal() {
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(20px);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div class="modal-content glass-card" style="
            max-width: 600px;
            padding: 40px;
            margin: 20px;
            position: relative;
            color: white;
        ">
            <button class="modal-close" style="
                position: absolute;
                top: 20px;
                left: 20px;
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
            ">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-body">
                <h3 id="modal-title"></h3>
                <p id="modal-description"></p>
                <div id="modal-features"></div>
                <div id="modal-specs"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    return modal;
}

// Initialize product modals
document.addEventListener('DOMContentLoaded', () => {
    const modal = createProductModal();
    
    document.querySelectorAll('.product-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const title = card.querySelector('h3').textContent;
            const description = card.querySelector('p').textContent;
            
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-description').textContent = description;
            
            modal.style.display = 'flex';
        });
    });
});

// Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
        }, 1000);
    });
}

// Intersection Observer for lazy loading
const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add any lazy loading logic here
            entry.target.classList.add('loaded');
        }
    });
});

// Apply lazy loading to images if any
document.querySelectorAll('img').forEach(img => {
    lazyLoadObserver.observe(img);
});