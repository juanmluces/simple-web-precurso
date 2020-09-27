const menuList = document.querySelector('#navMenu');
const menuBtn = document.querySelector('#menuBtn');

function toggleMenu() {
  menuList.classList.toggle('show_menu');
}

window.onclick = (event) => {
  if (event.target !== menuBtn) menuList.classList.remove('show_menu');
}

window.onscroll = () => {
  menuList.classList.remove('show_menu');
}