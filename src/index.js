import Home from './home.js'
import Menu from './menu'
import Contact from './contact'


let container = document.getElementById('container');
container.style.display = 'flex';
container.style.gap = '10px';

let tabHome = document.createElement('div');
let tabMenu = document.createElement('div');
let tabContact = document.createElement('div');

tabHome.textContent = 'Home';
tabMenu.textContent = 'Menu';
tabContact.textContent = 'Contact';

tabMenu.addEventListener('click', function() {
    container.textContent = ''
    container.append(Menu)
})

container.append(tabHome, tabMenu, tabContact);
container.appendChild(Home)