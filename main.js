// Smooth scroll dla #anchor
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id.length > 1) {
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    }
  }
});

// Proste ujawnianie elementów w trakcie przewijania
const reveal = () => {
  const els = document.querySelectorAll('.card, .tile, .steps li, .icon-badge');
  const trigger = window.innerHeight * 0.92;
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) el.style.transform = 'translateY(0)';
  });
};
document.addEventListener('scroll', reveal);
document.addEventListener('DOMContentLoaded', () => {
  // startowe transformacje
  document.querySelectorAll('.card, .tile, .steps li, .icon-badge').forEach(el => {
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'transform .6s ease';
  });
  reveal();
});
