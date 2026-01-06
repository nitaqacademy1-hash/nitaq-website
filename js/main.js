

// Simple intersection observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.story-step, .feature-block, .program-card, .insight-card, .journey-step, .program-graphic-card').forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
});

// Mobile Menu Logic
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.mobile-nav-overlay');

function toggleMenu() {
    if (mobileMenuBtn && navLinks && overlay) {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
}

if (overlay) {
    overlay.addEventListener('click', toggleMenu);
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks && navLinks.classList.contains('active') && !link.classList.contains('dropbtn')) {
            toggleMenu();
        }
    });
});

// Mobile Dropdown Toggle
const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropbtn');

if (dropbtn) {
    dropbtn.addEventListener('click', function (e) {
        if (window.innerWidth <= 968) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
}

// Hero Image Slider Logic
const heroImages = document.querySelectorAll('.hero-slider .hero-img-main');
let currentImageIndex = 0;

function nextImage() {
    if (heroImages.length > 0) {
        heroImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add('active');
    }
}

if (heroImages.length > 0) {
    setInterval(nextImage, 4000);
}
