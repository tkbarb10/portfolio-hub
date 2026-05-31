/* ──────────────────────────────────────────────
   main.js — Scroll animations, hamburger menu,
   and particle canvas for Dark Lab hero
   ────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {
  initScrollAnimations();
  initHamburger();
});


/* ── Scroll-triggered fade-in-up ─────────────── */

function initScrollAnimations() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in-up').forEach(function (el) {
    observer.observe(el);
  });
}


/* ── Hamburger menu ──────────────────────────── */

function initHamburger() {
  var hamburger = document.querySelector('.nav-hamburger');
  var navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on outside click
  document.addEventListener('click', function () {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });

  // Prevent closing when clicking inside nav
  navLinks.addEventListener('click', function (e) {
    e.stopPropagation();
  });
}


/* ── Particle canvas (Dark Lab hero only) ────── */

(function () {
  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var rafId = null;
  var dots  = [];

  var DOT_COUNT  = 48;
  var MAX_DIST   = 130;
  var DOT_SPEED  = 0.38;

  // Accent color: amber for dark theme
  var DOT_R = 245, DOT_G = 158, DOT_B = 11;

  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    canvas.width  = rect.width;
    canvas.height = rect.height;
  }

  function makeDots() {
    dots = [];
    for (var i = 0; i < DOT_COUNT; i++) {
      dots.push({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * DOT_SPEED * 2,
        vy: (Math.random() - 0.5) * DOT_SPEED * 2,
        r:  Math.random() * 1.8 + 0.8
      });
    }
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move and draw dots
    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0 || d.x > canvas.width)  d.vx = -d.vx;
      if (d.y < 0 || d.y > canvas.height) d.vy = -d.vy;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + DOT_R + ',' + DOT_G + ',' + DOT_B + ',0.65)';
      ctx.fill();
    }

    // Draw connecting lines between nearby dots
    for (var i = 0; i < dots.length; i++) {
      for (var j = i + 1; j < dots.length; j++) {
        var dx   = dots[i].x - dots[j].x;
        var dy   = dots[i].y - dots[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          var alpha = (1 - dist / MAX_DIST) * 0.3;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = 'rgba(' + DOT_R + ',' + DOT_G + ',' + DOT_B + ',' + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (rafId) return;
    resize();
    makeDots();
    tick();
  }

  function stop() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function syncToTheme(theme) {
    if (theme === 'dark') start();
    else stop();
  }

  // Start or stop based on initial theme
  syncToTheme(document.documentElement.getAttribute('data-theme'));

  // React to theme changes triggered by themes.js
  document.addEventListener('themechange', function (e) {
    syncToTheme(e.detail);
  });

  // Re-init on window resize
  window.addEventListener('resize', function () {
    if (rafId) {
      resize();
      makeDots();
    }
  });
})();
