// ---------------- MENU HAMBÚRGUER ----------------
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.position = 'absolute';
    menu.style.left = '20px';
    menu.style.top = '60px';
    menu.style.background = '#222';
    menu.style.padding = '10px';
    menu.style.borderRadius = '8px';
    menu.style.zIndex = '1000';
  }
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.style.display = 'none';
  }
});

// ---------------- DARK MODE ----------------
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

// ---------------- AUMENTO DE TEXTO ----------------
const textSizeButton = document.getElementById('text-size-button');
textSizeButton.addEventListener('click', () => {
  document.body.classList.toggle('large-text');
});

// ---------------- DÚVIDAS ----------------
const infoButton = document.getElementById('info-button');
infoButton.addEventListener('click', () => {
  alert("Para dúvidas, entre em contato com a equipe do CRPIR ou consulte a seção FAQ.");
});

// ---------------- INSCRIÇÃO NOS CURSOS ----------------
const inscricaoButtons = document.querySelectorAll('.inscricao-button');

inscricaoButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert("Inscrição realizada com sucesso! Em breve entraremos em contato.");
  });
});
