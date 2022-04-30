import Home from './home.js'
import Menu from './menu'
import Contact from './contact'
import './style.css'

let container = document.getElementById('container');

let tabHome = document.createElement('div');
let tabMenu = document.createElement('div');
let tabContact = document.createElement('div');

tabHome.setAttribute('id', 'tabHome');
tabMenu.setAttribute('id', 'tabMenu');
tabContact.setAttribute('id', 'tabContact');

tabHome.textContent = 'Home';
tabMenu.textContent = 'Menu';
tabContact.textContent = 'Contact';


let navbar = document.createElement('div');
navbar.setAttribute('id', 'navbar')

let page = document.createElement('div');
page.append(Home);

navbar.append(tabHome, tabMenu, tabContact);
container.append(navbar, page);

tabMenu.addEventListener('click', function() {
    page.textContent = ''
    page.append(Menu);
})

tabHome.addEventListener('click', function() {
    page.textContent = '';
    page.append(Home);
})

tabContact.addEventListener('click', function() {
    page.textContent = '';
    page.append(Contact);
})