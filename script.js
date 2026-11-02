// Header background on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Contact form (demo — replace with real submission later)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // TODO: заменить на реальную отправку данных,
  // например на Telegram-бота через ваш backend,
  // или на сервис форм (Formspree, Getform и т.п.)

  formNote.textContent = 'Спасибо! Заявка отправлена, мы свяжемся с вами в ближайшее время.';
  form.reset();
});
