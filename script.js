function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = '#7b2cbf';
        navLinks.style.padding = '1rem';
        navLinks.style.gap = '0';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Validate form
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields!');
        return;
    }
    
    alert(`Thank you ${name}! Your message has been received. We will contact you at ${email} soon.`);
    
    form.reset();
}

// Smooth scroll for all navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if it's open
                const navLinksContainer = document.querySelector('.nav-links');
                if (navLinksContainer.style.display === 'flex') {
                    navLinksContainer.style.display = 'none';
                }
            }
        });
    });
});

// Add scroll event listener for animations
window.addEventListener('scroll', function() {
    // You can add scroll animations here if needed
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!nav.contains(e.target) && navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    }
});

// Log page load for debugging
console.log('Petfinder website loaded successfully!');