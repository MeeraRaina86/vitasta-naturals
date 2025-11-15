// script.js for Vitasta Naturals

// --- Mobile Navigation Toggle ---
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navIcon = navToggle.querySelector('i'); // Get the icon

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('visible');
    
    // Change icon from bars to X and back
    if (mainNav.classList.contains('visible')) {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-times');
    } else {
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    }
});

// --- Fade-in on Scroll Effect ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: remove 'show' to fade out when scrolling up
            // entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));