/* Liber — shared site behaviour (header shadow + mobile menu).
   Loaded with `defer` on every page. Vanilla JS, no dependencies. */
(function () {
  var header = document.querySelector('header.site');
  if (!header) return;

  // Header hairline on scroll
  var onScroll = function () {
    header.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var toggle = header.querySelector('.nav-toggle');
  var links = header.querySelector('.nav-links');
  if (!toggle || !links) return;

  var setOpen = function (open) {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', function () {
    setOpen(!header.classList.contains('nav-open'));
  });
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 680) setOpen(false);
  });
})();
