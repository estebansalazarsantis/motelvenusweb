(() => {
  'use strict';

  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 })
    : null;

  document.querySelectorAll('.reveal').forEach(el => {
    if (observer) observer.observe(el);
    else el.classList.add('visible');
  });

  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImage = document.querySelector('[data-lightbox-image]');
  const closeButton = document.querySelector('[data-lightbox-close]');

  document.querySelectorAll('[data-full]').forEach(button => {
    button.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = button.dataset.full;
      lightboxImage.alt = button.dataset.alt || '';
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
    });
  });
  closeButton?.addEventListener('click', () => lightbox?.close());
  lightbox?.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.close();
  });

  const config = window.MOTEL_VENUS_CONFIG || {};
  const contactActions = document.querySelector('[data-contact-actions]');
  if (contactActions && (config.whatsapp || config.phone)) {
    contactActions.textContent = '';
    if (config.whatsapp) {
      const wa = document.createElement('a');
      wa.className = 'button button-primary';
      wa.href = `https://wa.me/${encodeURIComponent(config.whatsapp)}?text=${encodeURIComponent('Hola, quisiera consultar disponibilidad en Motel Los Ángeles de Venus.')}`;
      wa.target = '_blank';
      wa.rel = 'noopener noreferrer';
      wa.textContent = 'Consultar por WhatsApp';
      contactActions.appendChild(wa);
    }
    if (config.phone) {
      const tel = document.createElement('a');
      tel.className = config.whatsapp ? 'button' : 'button button-primary';
      tel.href = `tel:${config.phone.replace(/[^+\d]/g, '')}`;
      tel.textContent = 'Llamar ahora';
      contactActions.appendChild(tel);
    }
  }

  if (config.mapUrl) {
    document.querySelectorAll('[data-map-link]').forEach(link => {
      link.href = config.mapUrl;
    });
  }
})();
