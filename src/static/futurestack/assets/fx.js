// Motion: parallax layers, reveal-on-scroll and counting numbers.
// Everything is skipped when the visitor prefers reduced motion.
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = [].slice.call(document.querySelectorAll('.reveal'));
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  document.documentElement.classList.add('motion');

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
      [].forEach.call(e.target.querySelectorAll('[data-count]'), countUp);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  reveals.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });

  function countUp(el) {
    var end = parseInt(el.dataset.count, 10), start = performance.now();
    function tick(t) {
      var k = Math.min(1, (t - start) / 1100);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var layers = [].slice.call(document.querySelectorAll('[data-parallax]'));
  var ticking = false;
  function update() {
    var y = window.scrollY;
    layers.forEach(function (el) { el.style.translate = '0 ' + (y * parseFloat(el.dataset.parallax)).toFixed(1) + 'px'; });
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
})();
