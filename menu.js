const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

// função que abre e fecha o menu
const mexerMenu = (abrir) => {
  menu.classList[abrir ? 'add' : 'remove']('abrir-menu');
};

btnMenu.addEventListener('click', () => mexerMenu(true));
menu.addEventListener('click', () => mexerMenu(false));
overlay.addEventListener('click', () => mexerMenu(false));