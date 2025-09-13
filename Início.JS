// -------------------- MENU HAMBÚRGUER --------------------
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
  }
});

// -------------------- REDIRECIONAMENTO DOS LINKS --------------------
const menuLinks = menu.querySelectorAll('a');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // evita comportamento padrão
    const text = link.textContent.trim();

    // Futuro redirecionamento para páginas específicas
    switch(text) {
      case 'Início':
        window.location.href = 'index.html';
        break;
      case 'Sobre o CRPIR':
        window.location.href = 'sobre.html';
        break;
      case 'Agenda':
        window.location.href = 'agenda.html';
        break;
      case 'Como Denunciar':
        window.location.href = 'denunciar.html';
        break;
      case 'Contato':
        window.location.href = 'contato.html';
        break;
      default:
        console.log('Link não configurado ainda.');
    }
  });
});

// -------------------- DARK MODE --------------------
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

// -------------------- AUMENTAR TEXTO --------------------
const textSizeButton = document.getElementById('text-size-button');
textSizeButton.addEventListener('click', () => {
  document.body.classList.toggle('large-text');
});

// -------------------- DÚVIDAS (MODAL) --------------------
const infoButton = document.getElementById('info-button');
infoButton.addEventListener('click', () => {
  // Aqui podemos criar um modal simples
  alert('Se tiver dúvidas, consulte nossa seção de FAQ ou entre em contato.');
});
