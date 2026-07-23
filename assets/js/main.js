/* Heliotrope Safety — shared interactions
   Mobile menu · FAQ accordion · form validation · stat counters · scroll reveal
   Vanilla JS, no dependencies. */
(function () {
  'use strict';

  /* -------------------------------------------------- Mobile navigation */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close the menu when a link is chosen (mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* -------------------------------------------------- FAQ accordion */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      if (panel) {
        panel.style.maxHeight = expanded ? null : panel.scrollHeight + 'px';
      }
    });
  });

  /* -------------------------------------------------- Form validation */
  document.querySelectorAll('form[data-validate]').forEach(function (form) {
    var success = form.querySelector('.form-success');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('[required]').forEach(function (input) {
        var field = input.closest('.field');
        var ok = true;
        var val = (input.value || '').trim();
        if (!val) {
          ok = false;
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          ok = false;
        }
        if (field) field.classList.toggle('invalid', !ok);
        if (!ok && valid) input.focus();
        if (!ok) valid = false;
      });
      if (valid) {
        form.reset();
        if (success) {
          success.classList.add('show');
          success.setAttribute('role', 'status');
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
    // Clear error state as the user corrects a field
    form.querySelectorAll('[required]').forEach(function (input) {
      input.addEventListener('input', function () {
        var field = input.closest('.field');
        if (field) field.classList.remove('invalid');
      });
    });
  });

  /* -------------------------------------------------- Stat counter animation */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var decimals = (String(target).split('.')[1] || '').length;
    var start = 0, startTime = null, dur = 1600;
    function step(ts) {
      if (!startTime) startTime = ts;
      var p = Math.min((ts - startTime) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = start + (target - start) * eased;
      el.textContent = prefix + val.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(step);
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduce) {
    var counters = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); obs.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(function (el) { counters.observe(el); });

    /* Scroll reveal */
    var revealer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { revealer.observe(el); });
  } else {
    // Fallback: show final values / revealed state immediately
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var t = parseFloat(el.getAttribute('data-count'));
      var d = (String(t).split('.')[1] || '').length;
      el.textContent = (el.getAttribute('data-prefix') || '') + t.toFixed(d) + (el.getAttribute('data-suffix') || '');
    });
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* -------------------------------------------------- Footer year */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
