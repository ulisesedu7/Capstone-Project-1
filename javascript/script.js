/*
JS Object Data
*/
// import projectInfo from './data.js';

/*
Hamburguer Menu constants
*/
const hamburger = document.querySelector('#nav-bar-btn');
const navMenu = document.querySelector('.mobile-menu');
const mainLogo = document.querySelector('#main-logo');
const headerB = document.querySelector('#mobile-header');

/*
Open Hamburguer menu when the icon is clicked
*/
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  mainLogo.classList.toggle('is-hidden');
  headerB.classList.toggle('header-b');
});

/*
Close Menu when you click the nav links
*/
document.querySelectorAll('.mobile-menu-a').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  mainLogo.classList.remove('is-hidden');
  headerB.classList.remove('header-b');
}));

/*
Create HTML dynamically
*/

