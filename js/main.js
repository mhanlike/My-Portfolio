// ===========================
// MOBILE MENU TOGGLE
// ===========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const mobileClose = document.getElementById('mobileClose');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

if (mobileClose) {
    mobileClose.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// SMOOTH SCROLLING
// ===========================

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

// ===========================
// NAVBAR VISIBILITY ON SCROLL
// ===========================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and experience cards for animation
document.querySelectorAll('.project-card, .experience-card, .skill-category').forEach(el => {
    observer.observe(el);
});

// ===========================
// CONTACT FORM HANDLING
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Get form values for validation before submission
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            e.preventDefault();
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            e.preventDefault();
            return;
        }

        // Form will be submitted to Formspree
        // Show success message after brief delay
        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you shortly.`);
        }, 500);
    });
}

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// PAGE LOAD ANIMATIONS
// ===========================

window.addEventListener('load', () => {
    // Animate hero title on page load
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.animation = 'slideInLeft 0.8s ease-out';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'fadeInUp 0.8s ease-out 0.2s forwards';
        heroSubtitle.style.opacity = '0';
    }

    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        heroDescription.style.animation = 'fadeInUp 0.8s ease-out 0.4s forwards';
        heroDescription.style.opacity = '0';
    }

    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.style.animation = 'fadeInUp 0.8s ease-out 0.6s forwards';
        heroCta.style.opacity = '0';
    }
});

// ===========================
// SCROLL TO TOP BUTTON (Optional)
// ===========================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effects for scroll button
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.backgroundColor = '#333';
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.backgroundColor = '#000';
    scrollTopBtn.style.transform = 'scale(1)';
});

// ===========================
// KEYBOARD NAVIGATION
// ===========================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu on escape
        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ===========================
// UTILITY FUNCTIONS
// ===========================
// ===========================
// YOUTUBE VIDEO THUMBNAIL GENERATOR
// ===========================

function extractYouTubeVideoId(url) {
    // Handle different YouTube URL formats
    let videoId = '';
    
    if (url.includes('youtu.be/')) {
        // Format: https://youtu.be/VIDEO_ID?...
        videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
        // Format: https://www.youtube.com/watch?v=VIDEO_ID&...
        videoId = url.split('v=')[1].split('&')[0];
    }
    
    return videoId;
}

function generateYouTubeThumbnail() {
    const videoContainers = document.querySelectorAll('[data-video]');
    
    videoContainers.forEach((container, index) => {
        const videoUrl = container.getAttribute('data-video');
        const videoId = extractYouTubeVideoId(videoUrl);
        
        console.log(`Video ${index + 1}: URL="${videoUrl}", ID="${videoId}"`);
        
        if (videoId) {
            const img = container.querySelector('.video-thumbnail');
            if (img) {
                // Try multiple thumbnail resolutions in order of preference
                // maxresdefault (1280x720) - highest quality
                // hqdefault (480x360) - high quality fallback
                // mqdefault (320x180) - medium quality fallback
                // default (120x90) - minimum quality fallback
                
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                img.src = thumbnailUrl;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                console.log(`Setting thumbnail URL: ${thumbnailUrl}`);
            } else {
                console.warn(`No image element found for video ${index + 1}`);
            }
        } else {
            console.error(`Could not extract video ID from: ${videoUrl}`);
        }
    });
}

// Generate thumbnails when page loads
window.addEventListener('load', () => {
    generateYouTubeThumbnail();
    shuffleProjectImages();
    
    // Shuffle images every 5 seconds
    setInterval(shuffleProjectImages, 5000);
});

// ===========================
// IMAGE SHUFFLE FOR PROJECTS
// ===========================

const assetImages = [
    'black and white.jpg',
    'my photo.jpg',
    'side.jpg'
];

function getRandomImage() {
    return assetImages[Math.floor(Math.random() * assetImages.length)];
}

function shuffleProjectImages() {
    const shuffleCards = document.querySelectorAll('[data-shuffle-img]');
    
    shuffleCards.forEach(card => {
        const img = card.querySelector('.shuffle-image');
        if (img) {
            img.src = `images/${getRandomImage()}`;
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.objectFit = 'cover';
            img.style.display = 'block';
        }
    });
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Re-initialize anything that depends on window size
    if (window.innerWidth > 768 && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}, 250));