// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const highlight = document.querySelector('.highlight');

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    highlight.classList.add('open')

    // Reset the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    highlight.classList.remove('open')

    // Reset the menu state
    showMenu = false;
  }
}