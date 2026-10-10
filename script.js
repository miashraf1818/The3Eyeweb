// ThirdEye landing: minimal progressive enhancement, no dependencies.

// Load the SVG icon sprite inline so <use href="#id"> resolves same-document.
(function loadIcons() {
  fetch('assets/icons.svg')
    .then(function (r) { return r.ok ? r.text() : ''; })
    .then(function (svg) {
      if (svg) {
        var host = document.getElementById('icon-host');
        if (host) host.innerHTML = svg;
      }
    })
    .catch(function () { /* icons are decorative; ignore failures */ });
})();

// Footer year
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Nav background on scroll
var nav = document.getElementById('nav');
if (nav) {
  var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 8); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Reveal on scroll: opacity only, one-shot, respects reduced motion.
var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var revealTargets = document.querySelectorAll('.reveal');

if (prefersReduced || !('IntersectionObserver' in window)) {
  revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
} else {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(function (el) { io.observe(el); });
}

// Progressive enhancement for FAQ marker (+ / -) without layout shift.
document.querySelectorAll('.faq__item').forEach(function (item) {
  var marker = item.querySelector('.marker');
  if (!marker) return;
  item.addEventListener('toggle', function () {
    marker.textContent = item.open ? '\u2212' : '+'; // minus sign / plus
  });
});
