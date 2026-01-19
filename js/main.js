

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

/* --- Google Translate & Language Logic --- */

// Initialize Google Translate
// Initialize Google Translate
window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ar',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
};

// Load Google Translate Script
(function () {
    var gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.async = true;
    gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gtScript, s);
})();

document.addEventListener('DOMContentLoaded', function () {
    const langSwitcher = document.getElementById('lang-toggle');
    const html = document.documentElement;

    // Inject Loader HTML
    const loaderHTML = `
        <div id="lang-loader">
            <div class="loader-spinner"></div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', loaderHTML);
    const loader = document.getElementById('lang-loader');

    // Check for saved language state on load
    function checkInitialState() {
        const cookies = document.cookie.split(';');
        let isArabic = false;
        let hasCookie = false;

        cookies.forEach(c => {
            if (c.trim().startsWith('googtrans=')) {
                hasCookie = true;
                if (c.includes('/ar')) isArabic = true;
            }
        });

        if (isArabic) {
            updateUI('ar', false); // Initial load, no loader needed usually
        } else {
            updateUI('en', false);
        }

        // If cookie says Arabic, but UI was English, we might want to mask? 
        // But usually Google handles the initial translate fast enough.
    }

    // Update UI (RTL/LTR and Switcher Text)
    function updateUI(lang, showLoader = true) {
        if (showLoader && loader) {
            loader.classList.add('active');
            setTimeout(() => {
                loader.classList.remove('active');
            }, 1000); // 1 second mask to hide the transition
        }

        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.lang = 'ar';
            if (langSwitcher) langSwitcher.innerHTML = '<span class="notranslate">English | <strong>العربية</strong></span>';
        } else {
            html.setAttribute('dir', 'ltr');
            html.lang = 'en';
            if (langSwitcher) langSwitcher.innerHTML = '<span class="notranslate"><strong>English</strong> | العربية</span>';
        }
    }

    // Handle Switcher Click
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Language switcher clicked');

            // Check if running on file protocol
            if (window.location.protocol === 'file:') {
                alert('Attention: Google Translate does NOT work on local files (file://). Please run this project on a local server (e.g., using "npm run dev" or Live Server extension).');
                return;
            }

            const currentDir = html.getAttribute('dir');
            const targetLang = currentDir === 'rtl' ? 'en' : 'ar';

            console.log('Switching to:', targetLang);
            console.log('Switching to:', targetLang);

            // Show loader immediately
            if (document.getElementById('lang-loader')) {
                document.getElementById('lang-loader').classList.add('active');
            }

            // Set the Google Translate cookie
            // We set it for both domain root and current path to be safe
            document.cookie = `googtrans=/en/${targetLang}; path=/`;
            document.cookie = `googtrans=/en/${targetLang}; path=${window.location.pathname}`;

            // Reload the page to apply changes cleanly
            // This is often the most robust way to ensure Google Translate applies full DOM changes for RTL
            setTimeout(() => {
                window.location.reload();
            }, 500); // 500ms delay to let the loader appear and cookie set
        });
    }

    // Run initial check
    checkInitialState();
});
