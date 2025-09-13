// Loading Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
});

// Particle Background
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.1,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto slide
let autoSlideInterval = setInterval(nextSlide, 5000);

// Manual controls
document.querySelector('.next-slide').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    nextSlide();
    autoSlideInterval = setInterval(nextSlide, 5000);
});

document.querySelector('.prev-slide').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    prevSlide();
    autoSlideInterval = setInterval(nextSlide, 5000);
});

// Indicator controls
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentSlide = index;
        showSlide(currentSlide);
        autoSlideInterval = setInterval(nextSlide, 5000);
    });
});

// Pause auto slide on hover
document.querySelector('.hero-slider').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

document.querySelector('.hero-slider').addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
});

// Smooth Scrolling
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

// Header Background on Scroll
let lastScrollTop = 0;
const header = document.querySelector('.glass-header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.15)';
        header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
        header.style.boxShadow = 'none';
    }
    
    // Hide/show header based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Animated Counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    let increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            // Counter animation
            if (element.classList.contains('stat-number')) {
                const target = parseInt(element.getAttribute('data-count'));
                animateCounter(element, target);
                observer.unobserve(element);
            }
            
            // Slide in animation
            if (element.classList.contains('glass-card')) {
                element.style.transform = 'translateY(0) rotateX(0)';
                element.style.opacity = '1';
            }
            
            // 3D card animation
            if (element.classList.contains('product-card') || 
                element.classList.contains('service-card')) {
                element.style.animation = 'slideInUp 0.6s ease-out forwards';
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.stat-number').forEach(counter => {
    observer.observe(counter);
});

document.querySelectorAll('.glass-card').forEach(card => {
    card.style.transform = 'translateY(50px) rotateX(10deg)';
    card.style.opacity = '0';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

document.querySelectorAll('.product-card, .service-card').forEach(card => {
    observer.observe(card);
});

// Product Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter products
        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'slideInUp 0.6s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formElements = contactForm.elements;
    
    // Simple validation
    let isValid = true;
    for (let element of formElements) {
        if (element.required && !element.value.trim()) {
            isValid = false;
            element.style.borderColor = '#ff6b6b';
            setTimeout(() => {
                element.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }, 3000);
        }
    }
    
    if (isValid) {
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'در حال ارسال...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.textContent = 'ارسال شد ✓';
            submitButton.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
                contactForm.reset();
            }, 2000);
        }, 1500);
    }
});

// 3D Card Effects
document.querySelectorAll('.glass-card, .product-card, .service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (x - centerX) / centerX * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Dynamic Background Colors
const sections = document.querySelectorAll('section');
let currentBg = 0;
const backgrounds = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
];

const changeBackground = () => {
    document.body.style.background = backgrounds[currentBg];
    currentBg = (currentBg + 1) % backgrounds.length;
};

// Change background every 10 seconds
setInterval(changeBackground, 10000);

// Advanced Scroll Animations
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-animate]');
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.dataset.animate;
                    entry.target.classList.add(`animate-${animation}`);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        this.elements.forEach(element => observer.observe(element));
    }
}

// Initialize scroll animations
new ScrollAnimations();

// Magnetic Button Effect
document.querySelectorAll('.btn-3d, .product-btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0px, 0px) scale(1)';
    });
});

// Voice Search (if supported)
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = 'fa-IR';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        
        // Simple voice commands
        if (transcript.includes('محصولات') || transcript.includes('products')) {
            document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
        } else if (transcript.includes('تماس') || transcript.includes('contact')) {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        } else if (transcript.includes('خدمات') || transcript.includes('services')) {
            document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // Add voice search button (optional)
    const voiceButton = document.createElement('button');
    voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
    voiceButton.className = 'voice-search-btn';
    voiceButton.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    voiceButton.addEventListener('click', () => {
        recognition.start();
        voiceButton.style.background = 'rgba(255, 107, 107, 0.3)';
        setTimeout(() => {
            voiceButton.style.background = 'rgba(255, 255, 255, 0.1)';
        }, 3000);
    });
    
    document.body.appendChild(voiceButton);
}

// Performance Optimization
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations
    const scrolled = window.pageYOffset;
    
    // Update progress indicator (if exists)
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.pageYOffset;
        const progress = (scrolled / windowHeight) * 100;
        progressBar.style.width = `${progress}%`;
    }
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy Loading Images (if any are added)
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Theme Switcher (optional)
const createThemeSwitcher = () => {
    const themeSwitcher = document.createElement('div');
    themeSwitcher.className = 'theme-switcher';
    themeSwitcher.innerHTML = `
        <button data-theme="blue">🔵</button>
        <button data-theme="pink">🌸</button>
        <button data-theme="green">🌿</button>
        <button data-theme="purple">🟣</button>
    `;
    
    themeSwitcher.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 1000;
    `;
    
    const themes = {
        blue: ['#667eea', '#764ba2'],
        pink: ['#f093fb', '#f5576c'],
        green: ['#4facfe', '#00f2fe'],
        purple: ['#a8edea', '#fed6e3']
    };
    
    themeSwitcher.addEventListener('click', (e) => {
        if (e.target.dataset.theme) {
            const colors = themes[e.target.dataset.theme];
            document.body.style.background = `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
        }
    });
    
    document.body.appendChild(themeSwitcher);
};

// Initialize theme switcher
createThemeSwitcher();

// Error Handling
window.addEventListener('error', (e) => {
    console.log('An error occurred:', e.error);
});

// Service Worker (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

console.log('🚀 آریوتک وب‌سایت آماده است!');