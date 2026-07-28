/* ==========================================================================
   نعيم الرمال — shared behaviour for all pages
   Vanilla JS, no dependencies. Progressive-enhancement: the site is fully
   readable without JS; this layer adds motion and interactivity.
   ========================================================================== */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----- Image fallback: show the on-brand tile if a media file is missing -- */
  // exposed globally because it's referenced from inline onerror handlers
  window.mediaFail = function (img) {
    var frame = img.closest('.media-frame');
    if (frame) frame.classList.add('img-failed');
  };

  document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;

    /* ----- Current year in footer -------------------------------------- */
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    /* ----- Mobile navigation toggle ------------------------------------ */
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = body.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      // close when a link is tapped or the scrim is clicked
      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') body.classList.remove('nav-open');
      });
      document.addEventListener('click', function (e) {
        if (body.classList.contains('nav-open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
          body.classList.remove('nav-open');
        }
      });
    }

    /* ----- Sticky header shrink on scroll ------------------------------ */
    var header = document.querySelector('.site-header');
    var lastY = 0, ticking = false;
    function onScroll() {
      var sy = window.pageYOffset || document.documentElement.scrollTop;
      if (header) header.classList.toggle('shrink', sy > 40);
      lastY = sy; ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();

    /* ----- Scroll-reveal via IntersectionObserver ---------------------- */
    var reveals = document.querySelectorAll('[data-reveal], .blur-line');
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el) { io.observe(el); });
    }

    /* ----- Animated counters ------------------------------------------- */
    var counters = document.querySelectorAll('[data-count]');
    function runCounter(el) {
      var end = parseFloat(el.getAttribute('data-count'));
      var suffix = el.getAttribute('data-suffix') || '';
      var dur = 1600, start = null;
      if (reduce) { el.textContent = end + suffix; return; }
      function frame(t) {
        if (!start) start = t;
        var p = Math.min((t - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * end).toLocaleString('en-US') + suffix;
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = end.toLocaleString('en-US') + suffix;
      }
      requestAnimationFrame(frame);
    }
    if (counters.length) {
      if (!('IntersectionObserver' in window)) {
        counters.forEach(runCounter);
      } else {
        var cio = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) { runCounter(en.target); cio.unobserve(en.target); }
          });
        }, { threshold: 0.5 });
        counters.forEach(function (el) { cio.observe(el); });
      }
    }

    /* ----- Projects filter --------------------------------------------- */
    var filterBar = document.querySelector('.filter-bar');
    if (filterBar) {
      var items = Array.prototype.slice.call(document.querySelectorAll('.gallery__item'));
      filterBar.addEventListener('click', function (e) {
        var btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filterBar.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        items.forEach(function (it) {
          var show = cat === 'all' || it.getAttribute('data-cat') === cat;
          it.classList.toggle('hide', !show);
        });
      });
      // deep-link: projects.html#security-fences pre-selects that filter
      var hash = decodeURIComponent(location.hash.replace('#', ''));
      if (hash) {
        var target = filterBar.querySelector('[data-filter="' + hash + '"]');
        if (target) target.click();
      }
    }

    /* ----- Hero: hide <video> if it fails / is absent ------------------ */
    var heroVideo = document.querySelector('.hero__media video');
    if (heroVideo) {
      heroVideo.addEventListener('error', function () { heroVideo.style.display = 'none'; }, true);
      // if no source resolves shortly, fall back to the forge background
      setTimeout(function () {
        if (heroVideo.readyState === 0) heroVideo.style.display = 'none';
      }, 2500);
    }

    /* ----- Hero spark particles (canvas) — premium ambient motion ------ */
    var canvas = document.getElementById('hero-sparks');
    if (canvas && !reduce) initSparks(canvas);

    /* ----- Contact form (demo — opens WhatsApp with the message) ------- */
    var form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = (form.querySelector('[name=name]') || {}).value || '';
        var svc = (form.querySelector('[name=service]') || {}).value || '';
        var msg = (form.querySelector('[name=message]') || {}).value || '';
        var text = 'السلام عليكم، أنا ' + name + '.\nالخدمة: ' + svc + '\n' + msg;
        window.open('https://wa.me/966546359392?text=' + encodeURIComponent(text), '_blank');
      });
    }
  });

  /* ----- Spark particle system ---------------------------------------- */
  function initSparks(canvas) {
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w, h, sparks = [];
    function resize() {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);
    function spawn() {
      return {
        x: w * (0.6 + Math.random() * 0.4),        // emit from the upper-right forge glow
        y: h * (0.1 + Math.random() * 0.35),
        vx: -(0.4 + Math.random() * 1.4),
        vy: (0.3 + Math.random() * 1.1),
        life: 0, max: 60 + Math.random() * 60,
        size: 0.6 + Math.random() * 1.8
      };
    }
    for (var i = 0; i < 46; i++) { var s = spawn(); s.life = Math.random() * s.max; sparks.push(s); }
    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < sparks.length; i++) {
        var s = sparks[i];
        s.x += s.vx; s.y += s.vy; s.vy += 0.012; s.life++;
        var t = 1 - s.life / s.max;
        if (s.life >= s.max || s.y > h) { sparks[i] = spawn(); continue; }
        var alpha = Math.max(0, t) * 0.9;
        var g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 3);
        g.addColorStop(0, 'rgba(255,190,120,' + alpha + ')');
        g.addColorStop(0.4, 'rgba(209,85,31,' + (alpha * 0.7) + ')');
        g.addColorStop(1, 'rgba(209,85,31,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2); ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    tick();
  }
})();
