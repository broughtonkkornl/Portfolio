// ============================================================
// Kimberly K. Broughton — Portfolio Interactions
// ============================================================

(function () {
  'use strict';

  // ---------- Navbar scroll effect ----------
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---------- Mobile navigation toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ---------- Active nav link highlighting ----------
  const sections = document.querySelectorAll('section[id], header[id]');
  const navAnchorMap = {};

  navLinks.querySelectorAll('a[href^="#"]').forEach(function (link) {
    const target = link.getAttribute('href').slice(1);
    if (target) {
      navAnchorMap[target] = link;
    }
  });

  function highlightActiveNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        const activeId = section.id;
        Object.values(navAnchorMap).forEach(function (link) {
          link.classList.remove('active');
        });
        if (navAnchorMap[activeId]) {
          navAnchorMap[activeId].classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightActiveNav, { passive: true });
  highlightActiveNav();

  // ---------- Reveal-on-scroll animations ----------
  const revealElements = document.querySelectorAll('.reveal');

  // Fallback for browsers without IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  } else {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // ---------- Smooth scroll for anchor links (with offset) ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---------- Keyboard shortcut: press 'P' to print ----------
  document.addEventListener('keydown', function (e) {
    if (e.key === 'p' && (e.ctrlKey || e.metaKey)) {
      // Let the browser handle Ctrl/Cmd+P normally
      return;
    }
  });

  // ---------- Dynamic year in footer ----------
  const yearEls = document.querySelectorAll('.footer-copy');
  yearEls.forEach(function (el) {
    el.innerHTML = el.innerHTML.replace('2026', String(new Date().getFullYear()));
  });

  // ---------- Card tilt effect (desktop only) ----------
  const tiltCards = document.querySelectorAll('.skill-card, .edu-card, .stat-card');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    tiltCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(800px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg) translateY(-4px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  // ---------- Console signature ----------
  console.log(
    '%c🚀 Kimberly K. Broughton — Portfolio',
    'font-size: 16px; font-weight: bold; color: #37d5a4; padding: 8px 12px; background: #0a0e1a; border-radius: 6px;'
  );
  console.log('%cSystems Architect | NASA Inventor | 17+ Years', 'color: #7fb0ff;');
})();