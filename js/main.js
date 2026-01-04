// ============================================
// EDULY - Simple JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initSmoothScroll();
  initCarousel();
});

// Theme Management
function initTheme() {
  const themeToggle = document.querySelector('.theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  
  // Default to light, only use dark if explicitly set
  let currentTheme = storedTheme === 'dark' ? 'dark' : 'light';
  applyTheme(currentTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
        ? 'light' 
        : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Video Carousel (for mobile)
function initCarousel() {
  const carouselBtns = document.querySelectorAll('.carousel-btn');
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  
  if (!carouselBtns.length || !carouselSlides.length) return;
  
  carouselBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const slideIndex = parseInt(btn.dataset.slide, 10);
      
      // Update active states
      carouselBtns.forEach(b => b.classList.remove('active'));
      carouselSlides.forEach(s => s.classList.remove('active'));
      
      btn.classList.add('active');
      carouselSlides[slideIndex]?.classList.add('active');
    });
  });
}
