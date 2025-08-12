document.addEventListener('DOMContentLoaded', function() {
  // Menu Hamburguer
  const menuToggle = document.querySelector('.menu-toggle');
  const menuDropdown = document.querySelector('.menu-dropdown');
  const header = document.querySelector('header');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    menuDropdown.classList.toggle('show');
    header.classList.toggle('menu-open');
    document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
  });
  
  // Fecha o menu ao clicar nos links
  document.querySelectorAll('.menu-dropdown a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      menuDropdown.classList.remove('show');
      header.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });

  // FAQ Accordion
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-answer');

    if (item.classList.contains('active')) {
      // Se já está aberto, fecha imediatamente
      item.classList.remove('active');
      answer.style.maxHeight = 0;
    } else {
      // Fecha outros
      document.querySelectorAll('.faq-item').forEach((other) => {
        other.classList.remove('active');
        other.querySelector('.faq-answer').style.maxHeight = 0;
      });

      // Abre o clicado
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

  // Animações de scroll
  const elementos = document.querySelectorAll('section, footer, .card, .opcao, .foto');
  
  function animarElementos() {
    elementos.forEach(elemento => {
      const elementoTop = elemento.getBoundingClientRect().top;
      if (elementoTop < window.innerHeight - 100) {
        elemento.classList.add('aparecer');
      }
    });
  }
  
  window.addEventListener('scroll', animarElementos);
  animarElementos(); // Executa uma vez ao carregar
});