document.addEventListener('DOMContentLoaded', function() {
    // Typing Animation
    const typed = new Typed('.typing-text', {
        strings: ['Graphic Designer', 'Video editer', 'Driver', 'Photographer', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Navbar Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animate Skills Progress Bars on Scroll
    const skillItems = document.querySelectorAll('.skill-item');
    
    function animateSkills() {
        skillItems.forEach(item => {
            const progressBar = item.querySelector('.progress');
            const percent = item.querySelector('span').textContent;
            
            progressBar.style.width = '0';
            
            setTimeout(() => {
                progressBar.style.width = percent;
            }, 100);
        });
    }
    
    // Intersection Observer for Skills Section
    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});