/**
 * edVenture eLearning Hub - Shared JavaScript
 * Handles global interactions and UI behavior
 */

(function() {
  'use strict';

  // ============================================
  // NAVBAR SCROLL EFFECT
  // ============================================
  function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  function handleMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (!menuToggle || !navbarNav) return;

    menuToggle.addEventListener('click', function() {
      navbarNav.classList.toggle('active');
      
      // Toggle icon between hamburger and close
      const icon = this.querySelector('i');
      if (icon) {
        if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navbarNav.classList.remove('active');
          const icon = menuToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.navbar') && navbarNav.classList.contains('active')) {
        navbarNav.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  function handleSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignore # only links
        if (href === '#') return;
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = targetElement.offsetTop - navbarHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // ACTIVE NAV LINK BASED ON CURRENT PAGE
  // ============================================
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav a');
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      
      const linkPath = new URL(link.href).pathname;
      
      // Check for exact match or if current page is in the link path
      if (linkPath === currentPath || 
          (currentPath !== '/' && linkPath !== '/' && currentPath.includes(linkPath))) {
        link.classList.add('active');
      }
      
      // Handle home page special case
      if (currentPath === '/' && linkPath === '/') {
        link.classList.add('active');
      }
    });
  }

  // ============================================
  // HIGHLIGHT ACTIVE SECTION ON SCROLL (for single page apps)
  // ============================================
  function handleScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all nav links
          document.querySelectorAll('.navbar-nav a').forEach(link => {
            link.classList.remove('active');
          });
          
          // Add active class to corresponding nav link
          const activeLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    });
  }

  // ============================================
  // ANIMATE ELEMENTS ON SCROLL (Optional Enhancement)
  // ============================================
  function handleScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(el => observer.observe(el));
  }

  // ============================================
  // STICKY CTA BAR VISIBILITY
  // ============================================
  function handleStickyCTAVisibility() {
    const stickyBar = document.querySelector('.sticky-cta-bar');
    if (!stickyBar) return;

    // Hide CTA bar when user scrolls to footer
    const footer = document.querySelector('.footer');
    if (!footer) return;

    window.addEventListener('scroll', function() {
      const footerTop = footer.offsetTop;
      const windowBottom = window.scrollY + window.innerHeight;
      
      if (windowBottom >= footerTop) {
        stickyBar.style.opacity = '0';
        stickyBar.style.pointerEvents = 'none';
      } else {
        stickyBar.style.opacity = '1';
        stickyBar.style.pointerEvents = 'auto';
      }
    });
  }

  // ============================================
  // HANDLE CTA BUTTON CLICKS
  // ============================================
  function handleCTAClicks() {
    const ctaButtons = document.querySelectorAll('[data-cta="discovery-call"]');
    
    ctaButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        // You can customize this to open a modal, redirect to a booking page, etc.
        console.log('Discovery Call CTA clicked');
        
        // Example: Open booking link (replace with actual booking URL)
        // window.open('https://calendly.com/your-booking-link', '_blank');
        
        // Or scroll to contact form
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          e.preventDefault();
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // ============================================
  // FORM VALIDATION (Optional)
  // ============================================
  function handleFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            
            // Remove error class on input
            field.addEventListener('input', function() {
              this.classList.remove('error');
            });
          }
        });
        
        if (isValid) {
          // Submit form or handle submission
          console.log('Form is valid, submitting...');
          // form.submit(); // Uncomment to actually submit
        } else {
          console.log('Form has errors');
        }
      });
    });
  }

  // ============================================
  // INITIALIZE ALL FUNCTIONS
  // ============================================
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initializeFeatures();
      });
    } else {
      initializeFeatures();
    }
  }

  function initializeFeatures() {
    handleNavbarScroll();
    handleMobileMenu();
    handleSmoothScroll();
    setActiveNavLink();
    handleScrollSpy();
    handleScrollAnimations();
    handleStickyCTAVisibility();
    handleCTAClicks();
    handleFormValidation();
    
    console.log('edVenture eLearning Hub - JavaScript initialized');
  }

  // Start the application
  init();

})();
