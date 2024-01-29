import './style.css';
import { loadHomePage } from './home';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact';

const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

let activeButton = homeButton;


homeButton.addEventListener('click', () => {
  loadHomePage();
  setActiveButton(homeButton);
});

menuButton.addEventListener('click', () => {
  loadMenuPage();
  setActiveButton(menuButton);
});

contactButton.addEventListener('click', () => {
  loadContactPage();
  setActiveButton(contactButton);
});

function setActiveButton(button) {
  activeButton.classList.remove('active');
  button.classList.add('active');
  activeButton = button;
}

loadHomePage();