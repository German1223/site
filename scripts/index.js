const header = document.getElementById('header');
const menu = document.getElementById('menu');
const menuAdaptive = document.getElementById('menu-adaptive');
menuAdaptive.addEventListener('click', switchMenu);
function switchMenu() {
    menu.classList.toggle('menu-none');
    header.classList.toggle('m-b-h');
}
